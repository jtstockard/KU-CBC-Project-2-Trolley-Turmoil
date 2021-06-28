const router = require("express").Router();
const questionRoutes = require("./question-routes");
const userRoutes = require("./user-routes");

router.use("/questions", questionRoutes);
router.use("/users", userRoutes);
module.exports = router;
