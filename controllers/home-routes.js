const router = require("express").Router();
const { User , Question} = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  console.log("Rendering homepage");
  const questionIds = req.session.answers.map(answer => {
    return answer.question_id
  })
  console.log(req.session)
  console.log(questionIds)
   Question.findAll({
      // where: { 
      //   [Op.not]: [{
      //     id: [...questionIds]
      //   }]
      // },
      raw: true
    })
   .then((dbQuestionData) => {

     console.log("List of questions:", dbQuestionData)
     res.render("homepage", {
       loggedIn: req.session.loggedIn,
       username: req.session.username,
       questions: dbQuestionData
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

router.get("/login", async (req, res) => {
  console.log("Rendering Login Page");
  res.render("login");
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
router.get("/register", (req, res) => {
res.render("register", {
  loggedIn: req.session.loggedIn
})
})
router.get("/profile", (req, res) => {

  res.render("profile", {
    loggedIn: req.session.loggedIn
  });
}); 
module.exports = router;
