console.log('Test');

fetch('/api/questions/random-answerable')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    showQuestion(data);
  });
  


  document.getElementById("buttonA").addEventListener("click", buttonActionA);
  function buttonActionA() {
    console.log("Button A Clicked")
  }

  $("buttonA").click(function (e) {
    console.log("Yo")
  });

//   function showNextQuestionA() {
//     document.getElementById('answerable-question-choice-1').questionElement1.display = "block";
//  }
  document.getElementById("buttonB").addEventListener("click", buttonActionB);
  function buttonActionB() {
   console.log("Button B Clicked")
  }

// //Handle our A button click
//   $("#buttonA").click(function (e) {
// //     // Prevents the form from triggering its default behavior
// //     e.preventDefault();
//     console.log("Button A clicked");

// //Handle our B button click
// $("#buttonB").click(function (e) {
// //   // Prevents the form from triggering its default behavior
// //   e.preventDefault();
//   console.log("Button B clicked");

function showQuestion(question) {
  console.log(question)
  const questionElement1 = document.getElementById('answerable-question-choice-1');
  questionElement1.textContent = question.first_choice;
  const questionElement2 = document.getElementById('answerable-question-choice-2');
  questionElement2.textContent = question.second_choice;
}
const choiceEventHandler = async (event) => {
  event.preventDefault();

  const firstChoice = question.first_choice;
  const secondChoice = question.second_choice;

  if (firstChoice || secondChoice) {
    console.log('choice made!');
  }
};
// function showQuestion(question){
//   questionElement = document.getElementById('answerable-question-choice-1');
//   questionElement.innerHTML = question.first_choice;
//   questionElement = document.getElementById('answerable-question-choice-2');
//   questionElement.innerHTML = question.second_choice;


