const router = require('express').Router();
const { User, History, Answer } = require('../../models');
const { findAll } = require('../../models/User');
const withAuth = require('../../utils/auth');

// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: History,
        attributes: ['id', 'title', 'choice', 'created_at'],
      },
    ],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  console.log('creating a user');
  console.log(req.body);

  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then((dbUserData) => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    });
  });
});

// LOGIN
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
    include: [
      {
        model: Answer,
      },
    ],
    plain: true,
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password!' });
      return;
    }
    const user = dbUserData.get({
      plain: true,
    });
    console.log(user);

    req.session.save(() => {
      // declare session variables
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.answers = user.answers;
      req.session.loggedIn = true;

      res.status(200).end();
    });
  });
});
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// PUT /api/users/1
router.put('/:id', withAuth, (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
