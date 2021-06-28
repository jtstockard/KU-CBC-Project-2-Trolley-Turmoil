const questionForm = document.getElementById('question-form');

questionForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (e.target.hasAttribute('user-id')) {
    const id = e.target.getAttribute('user-id');

    const newFirstChoice = document.getElementById('#firstChoice-register');
    const newSecondChoice = document.getElementById('#secondChoice-register');

    if (newFirstChoice && newSecondChoice) {
      const response = await fetch(`/api/question-routes`, {
        method: 'POST',
        body: JSON.stringify({ newFirstChoice, newSecondChoice }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.questions.push('/');
      } else {
        alert('Failed to create question');
      }
    }
  }
});

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

document
  .querySelector('.question-form')
  .addEventListener('submit', newFirstChoice, newSecondChoice);

document.querySelector('.user-id').addEventListener('click', delButtonHandler);
