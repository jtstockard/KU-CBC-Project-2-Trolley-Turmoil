// fetch('/api/questions/random-answerable')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     showQuestion(data);
//   });

console.log('Test');

// NEW LOGIC FOR GAME

let spentQuestionIds = []

getNextQuestion()

function getNextQuestion() {
  fetch('/api/questions/random-answerable', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(spentQuestionIds),
  })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data.id);
          spentQuestionIds.push(data.id)
          showQuestion(data);
        }
        else {
          outOfQuestions()
        }
      });
}
document.getElementById("buttonA").addEventListener("click", buttonActionA);
function buttonActionA() {
  console.log("Button A Clicked")
  getNextQuestion()
}
document.getElementById("buttonB").addEventListener("click", buttonActionB);
function buttonActionB() {
  console.log("Button B Clicked")
  getNextQuestion()
}

console.log(spentQuestionIds)

  
// // Creating Three Arrays

// // // Array 1 contains all total question pairs
// // const totalQuestions = []
// // // Array 2 contains all seen question pairs
// // const seenQuestions = []
// // // Array 3 contains all remaining unseen question pairs
// // const unseenQuestions = []



//   document.getElementById("buttonA").addEventListener("click", buttonActionA);
//   function buttonActionA() {
//     console.log("Button A Clicked")
//   }

//   document.getElementById("buttonB").addEventListener("click", buttonActionB);
//   function buttonActionB() {
//    console.log("Button B Clicked")
//   }

// // //Handle our A button click
// //   $("#buttonA").click(function (e) {
// // //     // Prevents the form from triggering its default behavior
// // //     e.preventDefault();
// //     console.log("Button A clicked");

// // //Handle our B button click
// // $("#buttonB").click(function (e) {
// // //   // Prevents the form from triggering its default behavior
// // //   e.preventDefault();
// //   console.log("Button B clicked");

function showQuestion(question) {
  console.log(question)
  const questionElement1 = document.getElementById('answerable-question-choice-1');
  questionElement1.textContent = question.first_choice;
  const questionElement2 = document.getElementById('answerable-question-choice-2');
  questionElement2.textContent = question.second_choice;
}
function outOfQuestions() {
  console.log("Sorry, You've viewed everything currently in the database! Come back later.")
  const container = document.getElementById('mainChild');
  container.innerHTML = "Sorry, You've viewed everything currently in the database! Come back later.";
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


