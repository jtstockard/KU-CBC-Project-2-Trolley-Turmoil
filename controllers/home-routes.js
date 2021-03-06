const router = require('express').Router();
const { User, Question } = require('../models');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  console.log('Rendering homepage');
  if (!req.session.loggedIn) {
    return res.render('login');
  }

  if (req.session.answers) {
  const questionIds = req.session.answers.map((answer) => {
      return answer.question_id;
    });
  }
  Question.findAll().then((dbQuestionData) => {
    console.log('List of questions:', dbQuestionData);
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      questions: dbQuestionData,
      id: req.session.user_id,
    });
  });
  //   try {
  //     // Get all users, sorted by name
  //     const userData = await User.findAll({
  //       attributes: { exclude: ["password"] },
  //       order: [["name", "ASC"]],
  //     });

  //     // Serialize user data so templates can read it
  //     const users = userData.map((project) => project.get({ plain: true }));

  //     // Pass serialized data into Handlebars.js template
  //     res.render("homepage", { users });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
});

router.get('/login', async (req, res) => {
  console.log('Rendering Login Page');
  res.render('login');
  //   try {
  //     // Get all users, sorted by name
  //     const userData = await User.findAll({
  //       attributes: { exclude: ["password"] },
  //       order: [["name", "ASC"]],
  //     });

  //     // Serialize user data so templates can read it
  //     const users = userData.map((project) => project.get({ plain: true }));

  //     // Pass serialized data into Handlebars.js template
  //     res.render("homepage", { users });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
});
router.get('/register', (req, res) => {
  res.render('register', {
    loggedIn: req.session.loggedIn,
  });
});
router.get('/profile/:id', async (req, res) => {
  console.log('profile page');
  const userData = await User.findByPk(req.params.id, {
    attributes: {
      exclude: ['password'],
    },
  });
  const id = req.session.id;
  const username = req.session.username;
  const user = userData.get({ plain: true });
  console.log("User ID: #{req.session.user_id}");
  const userQuestions = await Question.findAll({
    where: {user_id: req.session.user_id}
  }).map((question) => {
    return {first_choice: question.first_choice, second_choice: question.second_choice };
  });
  console.log(userQuestions);
  res.render('profile', {
    id,
    user,
    username,
    loggedIn: true,
    userQuestions: userQuestions
  });
});
module.exports = router;
