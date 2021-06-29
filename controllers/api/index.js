const router = require("express").Router();
const questionRoutes = require("./question-routes");
const answerRoutes = require("./answer-routes");
const userRoutes = require("./user-routes");

router.use("/questions", questionRoutes);
router.use("/answers", answerRoutes);
router.use("/users", userRoutes);
module.exports = router;
