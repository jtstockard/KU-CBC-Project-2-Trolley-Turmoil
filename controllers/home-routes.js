const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  console.log("Rendering homepage");
  res.render("homepage");
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

router.get("/loggedin", async (req, res) => {
  console.log("Rendering Logged In Page");
  res.render("loggedIn");
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

module.exports = router;
