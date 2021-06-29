const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Answer } = require('../../models');

router.post('/', (req, res) => {
  Answer.create({
    question_id: req.body.question_id,
    choice: req.body.choice,
    user_id: req.session.user_id
  }).then((dbAnswerData) => {
    res.json(dbAnswerData);
  });
});

module.exports = router;
