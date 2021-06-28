const Question = require("../models/Questions");

const questionSeed = [
  {
    first_choice: "Your oldest family member",
    second_choice: "A doctor that cures cancer",
  },
  {
    first_choice: "Ten Thousand Dollars",
    second_choice: "A bank robber",
  },
  {
    first_choice: "Jeff Bezos",
    second_choice: "Susan Wojcicki",
  },
  {
    first_choice: "A potentially killer robot, that can save world hunger",
    second_choice: "A voodoo doll of your loved ones",
  },
  {
    first_choice: "Someone who stole your idenitity",
    second_choice: "A cop trying to arrest you",
  },
];

const seedQuestions = () => Question.bulkCreate(questionSeed);

module.exports = seedQuestions;
