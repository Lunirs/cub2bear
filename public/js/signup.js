async function signupFormHandler(event) {
    event.preventDefault();
    
    const email = document.querySelector('#username').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const password2 = document.querySelector('#password2').value.trim();
    
    if(!email) {
        alert("Please enter email.");
    }
    else if(!username) {
        alert("Please enter username");
    }
    else if(!password) {
        alert("Please enter password.");
    }
    else if(password != password2) {
        alert("You entered different password for confirm.");
    }
    else {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            email,
            username,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else if(response.status == 400) {
        alert(response.json.message);
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);