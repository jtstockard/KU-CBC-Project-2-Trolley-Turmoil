const { User } = require("../models/User");

const userData = [
  {
    username: "brandon_franks",
    twitter: "brandonf",
    github: "brandonf",
    email: "brandon_f@gmail.com",
    password: "p@ssword1",
  },
  {
    username: "matt_b",
    twitter: "mathewb",
    github: "mathewb",
    email: "mathew_b@gmail.com",
    password: "p@ssword2",
  },
  {
    username: "michael_scott",
    twitter: "mscott",
    github: "mscott",
    email: "michael_scott@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "chuck_n",
    twitter: "cnorris",
    github: "cnorris",
    email: "chuck_n@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "jtstockard",
    twitter: "jtstockard",
    github: "jtstockard",
    email: "jtstockard@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "Gibson_l",
    twitter: "Gibby",
    github: "Gibby",
    email: "Gibson_l@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
