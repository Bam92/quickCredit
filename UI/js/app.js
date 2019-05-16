// Sign Up
   if (document.getElementById("firstName", "lastName", "phone", "email", "password") != null) {
       const firstName = document.getElementById("firstName");
       const lastName = document.getElementById("lastName");
       const phone = document.getElementById("phone");
       const email = document.getElementById("email");
       const password = document.getElementById("password");

   firstName.addEventListener("blur", function(e) {
      const firstNameHelp = document.getElementById("helpFirstName");

      if (e.target.value === '') firstNameHelp.textContent = "Field cannot be empty";      
      if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });
   
   lastName.addEventListener("blur", function(e) {
      const firstNameHelp = document.getElementById("helpLastName");
   
      if (e.target.value === "") firstNameHelp.textContent = "Field cannot be empty";      
      if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });
   
   phone.addEventListener("blur", function(e) {
      // must be a string formated as this you@domain.com
      const phonelHelp = document.getElementById("helpPhone");
      const regEmail = /.+@.+\..+/;
      
      if (e.target.value === "") phoneHelp.textContent = "Field cannot be empty"; 
      if (!regEmail.test(e.target.value)) phoneHelp.textContent = "Invalid email address";
   });
   
   email.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const emailHelp = document.getElementById("helpEmail");
      const regEmail = /.+@.+\..+/;
      
      if (e.target.value === '') emailHelp.textContent = "Field cannot be empty"; 
      else if (!regEmail.test(e.target.value)) emailHelp.textContent = "Invalid email address";
   });
   
   password.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const passwordHelp = document.getElementById("helpPassword");
      const regPassword = /.+@.+\..+/;
      
      if (e.target.value === '') passwordHelp.textContent = "Field cannot be empty"; 
      else if (e.target.value.length < 9) passwordHelp.textContent = "Field must contain at least 9 charactors";
   });
   }

   // User sign in
const submitBtn = document.getElementById('submitBtn');
if(submitBtn) {
   submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.replace('./templates/usrAccount.html');
      return false;
   });
}

// Admin sign in
const adminCheck = document.getElementById('adminCheck');

if(adminCheck) {
   adminCheck.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.replace('./adminDash.html');
      return false;
   });
}

// Application
if (document.getElementById("amount") !== null) {
const loanAmount = document.getElementById("amount");
   
   loanAmount.addEventListener("blur", function(e) {
      const loanAmountHelp = document.getElementById("helpAmount");

      if (e.target.value === '') loanAmountHelp.textContent = "Field cannot be empty";
      else if (isNaN(e.target.value) === true) loanAmountHelp.textContent = "Field cannot contain a string";      
      else if (e.target.value < 20) loanAmountHelp.textContent = "Field must contain at least $ 20.00";
   });
}

/* Home page */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('auth-home');

if (signUpButton || signInButton) {
   signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
  });
  
  signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
  });
}

/* Form submission */
const form = document.querySelector('form');

if (form) {
   form.addEventListener('submit', (e) => {
      const login = form.elements.email.value;
      const password = form.elements.password.value;
      const usrCategoy = form.elements.usrLogin.value;
      //console.log(usrCategoy);

      if (login !== null && password !== null && usrCategoy !== null) {
         if (usrCategoy === 'User') {
            e.preventDefault();
            window.location.replace('./templates/usrAccount.html');
            return false;

         } else if (usrCategoy === 'Admin') {
            e.preventDefault();
            window.location.replace('./adminDash.html');
            return false;
         }
      }
   });
}
