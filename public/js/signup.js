const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('please work');

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const password2 = document.querySelector('#password2').value.trim();

  if (username && email && password && password === password2) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(
        `Failed to sign up. Please check to see if all fields match the requirement.
        (Password length must be 8 or more characters)`
      );
    }
  } else {
    alert(
      'Please do not leave a field blank. Please also double check if your passwords match.'
    );
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
