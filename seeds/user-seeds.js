const { User } = require('../models');

const userData = [
  {
    username: 'brandon_franks',
    email: 'brandon_f@gmail.com',
    password: 'p@ssword1',
  },
  {
    username: 'matt_b',
    email: 'mathew_b@gmail.com',
    password: 'p@ssword2',
  },
  {
    username: 'michael_scott',
    email: 'michael_scott@gmail.com',
    password: 'p@ssword3',
  },
  {
    username: 'chuck_n',
    email: 'chuck_n@gmail.com',
    password: 'p@ssword4',
  },
  {
    username: 'jtstockard',
    email: 'jtstockard@gmail.com',
    password: 'p@ssword5',
  },
  {
    username: 'Gibson_l',
    email: 'Gibson_l@gmail.com',
    password: 'p@ssword6',
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true
});

module.exports = seedUsers;
