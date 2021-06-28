const User = require('./User');
const Question = require('./Questions');
const Answer = require('./Answer');

Question.belongsTo(User, {
  foreignKey: 'user_id',
});
Answer.belongsTo(User, {
  foreignKey: 'user_id',
});
User.hasMany(Answer, {
  foreignKey: 'user_id',
});
User.hasMany(Question, {
  foreignKey: 'user_id',
});
Question.hasMany(Answer, {
  foreignKey: 'question_id',
});
Answer.belongsTo(Question, {
  foreignKey: 'question_id',
});

module.exports = { User, Question, Answer };
