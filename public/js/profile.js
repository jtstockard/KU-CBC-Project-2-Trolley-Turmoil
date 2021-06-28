const questionForm = document.getElementById('question-form');

questionForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('form submitted');

  const newFirstChoice = document.getElementById('firstChoice-register').value;
  const newSecondChoice = document.getElementById('secondChoice-register').value;

  if (newFirstChoice && newSecondChoice) {
    const response = await fetch(`/api/questions`, {
      method: 'POST',
      body: JSON.stringify({ first_choice: newFirstChoice, second_choice: newSecondChoice }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
    .then(data => {
      // [TODO] Add error handling
      appendNewQuestionToList(data);
      resetForm();
      alert("Question created");
    });;
  }else{
    alert("You need to fill out both choices.");
  }
});

function resetForm(){
  document.getElementById('firstChoice-register').value = null;
  document.getElementById('secondChoice-register').value = null;
}

function appendNewQuestionToList(question){
  questionList = document.getElementById('user-created-questions');
  newQuestion = document.createElement('li');
  newQuestion.append(question.first_choice + " VS " + question.second_choice);
  questionList.append(newQuestion);
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('user-id')) {
    const id = event.target.getAttribute('user-id');

    const response = await fetch(`/api/user-routes/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/user');
    } else {
      alert('Failed to delete user');
    }
  }
};

// document
//   .querySelector('.question-form')
//   .addEventListener('submit', newFirstChoice, newSecondChoice);

// document.querySelector('.user-id').addEventListener('click', delButtonHandler);
