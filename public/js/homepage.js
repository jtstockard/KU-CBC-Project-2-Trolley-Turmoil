console.log("Test")

fetch("/api/questions/random-answerable")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showQuestion(data);
  });

function showQuestion(question){
  questionElement = document.getElementById('answerable-question-choice-1');
  questionElement.innerHTML = question.first_choice;
  questionElement = document.getElementById('answerable-question-choice-2');
  questionElement.innerHTML = question.second_choice;
};