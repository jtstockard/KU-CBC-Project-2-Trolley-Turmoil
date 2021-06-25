const User = require('./User');
const Project = require('./Project');
const Question = require('./Questions');

Question.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Question };
