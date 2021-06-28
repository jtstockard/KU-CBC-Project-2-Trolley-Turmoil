const sequelize = require('../config/connection');
const { User, Answer } = require('../models');

const userData = require('./userData.json');
const questionData = require('./questionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const questions of questionData) {
    await Answer.create({
      ...questions,
      choice: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

module.exports = seedDatabase;
