//SignUp
const SignUpForm = document.querySelector('#modal-signup');

SignUpForm.addEventListener('submit' , e => {
  e.preventDefault();

  // const email =SignUpForm['signup-email'].value;
  // const password =SignUpForm['signup-password'].value;

  const email = e.target.email.value;
  const password = e.target.password.value;

  auth.createUserWithEmailAndPassword(email , password).then(userCred => {
    console.log(userCred.user);

    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    SignUpForm.reset();
  })
});

//Logout
const Logout = document.querySelector('#logout')

Logout.addEventListener('click', e => {
  e.preventDefault();

  auth.signOut().then(_ => {
    alert('User Has Been Logged Out!!')
  })
})

// Logging In
const LogInForm = document.querySelector('#modal-login');

LogInForm.addEventListener('submit', e => {
  e.preventDefault();
  const {email , password} = e.target

  const LogInEmail = email.value;
  const LogInPassword = password.value;

  auth.signInWithEmailAndPassword(LogInEmail, LogInPassword).then(userCred => {
    alert('User Logged In!!');
    console.log(userCred)
  })

  const LogInModal = document.querySelector('#modal-login');
    M.Modal.getInstance(LogInModal).close();
    LogInForm.reset();
})