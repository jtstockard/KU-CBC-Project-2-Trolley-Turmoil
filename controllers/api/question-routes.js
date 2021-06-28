const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Question } = require('../../models');
const seedQuestions = require('../../seeds/questions-seeds');

router.get('/', (req, res) => {
  console.log('Getting Questions');
  Question.findAll({}).then((dbData) => {
    const randomIndex = Math.floor(Math.random() * dbData.length);
    res.status(200).json(dbData[randomIndex]);
  });
});
router.get('/random-answerable', (req, res) => {
  console.log(
    'Getting Random Answerable Question (that has not been answered yet)'
  );
  // SELECT *
  // FROM questions
  // WHERE questions.id NOT IN (SELECT question_id FROM answers WHERE answers.user_id = #{loggedInUser.id})
  // ORDER BY RAND()
  // LIMIT 1;
  Question.findOne({ order: sequelize.random() }).then((dbData) => {
    res.status(200).json(dbData);
  });
});
router.post('/profile', (req, res) => {
  console.log('creating your question');
  console.log(req.body);

  Question.create({
    first_choice: req.body.first_choice,
    second_choice: req.body.second_choice,
  }).then((dbQuestionData) => {
    req.session.save(() => {
      req.session.first_choice = dbQuestionData.first_choice;
      req.session.second_choice = dbQuestionData.second_choice;
      req.session.loggedIn = true;

      res.json(dbQuestionData);
    });
  });
});

// router.post("/login", async (req, res) => {
//   try {
//     // Find the user who matches the posted e-mail address
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     // Verify the posted password with the password store in the database
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }

//     // Create session variables based on the logged in user
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post("/logout", (req, res) => {
//   if (req.session.logged_in) {
//     // Remove the session variables
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
