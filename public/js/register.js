const registerForm = document.getElementById("register-form")

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const newName = document.getElementById("name-register")
    const newEmail = document.getElementById("email-register")
    const newPassword = document.getElementById("password-register")
    const newUser = {username: newName.value, email: newEmail.value, password: newPassword.value}
    fetch("/api/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify(newUser)
  
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // [TODO] Add error handling
      window.location.href = "/";
    });
    
})