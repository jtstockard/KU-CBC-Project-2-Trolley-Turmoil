const router = require("express").Router();
const questionRoutes = require("./question-routes");

router.use("/questions", questionRoutes);

module.exports = router;
