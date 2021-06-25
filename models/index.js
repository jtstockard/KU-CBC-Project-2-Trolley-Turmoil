const User = require('./User');
const Project = require('./Project');
const Question = require('./Questions');
const Answer = require('./Answer');

Question.belongsTo(User, {
  foreignKey: 'user_id',
});
Answer.belongsTo(User, {
  foreignKey: 'user_id',
});
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
});

module.exports = { User, Question, Answer };
