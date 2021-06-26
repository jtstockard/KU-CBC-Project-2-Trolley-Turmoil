const sequelize = require('../config/connection');
const { User, Answer, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const questionData = require('./questionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const question of questionData) {
    await Question.create({
      ...question,
      choice: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
