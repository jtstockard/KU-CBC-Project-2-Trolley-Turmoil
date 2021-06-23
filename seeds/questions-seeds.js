const { Post } = require("../models/Questions");

const postData = [
  {
    id: 1,
    first_choice: "Your oldest family member",
    second_choice: "A doctor that cures cancer",
  },
  {
    id: 2,
    first_choice: "Ten Thousand Dollars",
    second_choice: "A bank robber",
  },
  {
    id: 3,
    first_choice: "Jeff Bezos",
    second_choice: "Susan Wojcicki",
  },
  {
    id: 4,
    first_choice: "A potentially killer robot, that can save world hunger",
    second_choice: "A voodoo doll of your loved ones",
  },
  {
    id: 5,
    first_choice: "Someone who stole your idenitity",
    second_choice: "A cop trying to arrest you",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
