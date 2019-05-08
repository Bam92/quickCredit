/* eslint-env es6 */
/* eslint-disable */

// Sign Up
   if (document.getElementById("firstName", "lastName", "phone", "email", "password") != null) {
       const firstName = document.getElementById("firstName");
       const lastName = document.getElementById("lastName");
      const phone = document.getElementById("phone");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

   firstName.addEventListener("blur", function(e) {
      const firstNameHelp = document.getElementById("helpFirstName");

      if (e.target.value === "") firstNameHelp.textContent = "Field cannot be empty";      
      if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });
   
   lastName.addEventListener("blur", function(e) {
      const firstNameHelp = document.getElementById("helpLastName");
   
      if (e.target.value === "") firstNameHelp.textContent = "Field cannot be empty";      
      if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });
   
   phone.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const phonelHelp = document.getElementById("helpPhone");
      const regEmail = /.+@.+\..+/;
      
      if (e.target.value === "") phoneHelp.textContent = "Field cannot be empty"; 
      if (!regEmail.test(e.target.value)) phoneHelp.textContent = "Invalid email address";
   });
   
   email.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const emailHelp = document.getElementById("helpEmail");
      const regEmail = /.+@.+\..+/;
      
      if (e.target.value === "") emailHelp.textContent = "Field cannot be empty"; 
      else if (!regEmail.test(e.target.value)) emailHelp.textContent = "Invalid email address";
   });
   
   password.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const passwordHelp = document.getElementById("helpPassword");
      const regPassword = /.+@.+\..+/;
      
      if (e.target.value === "") passwordHelp.textContent = "Field cannot be empty"; 
      else if (e.target.value.length < 9) passwordHelp.textContent = "Field must contain at least 9 charactors";
      //else if (!regEmail.test(e.target.value)) emailHelp.textContent = "Invalid email address";
   });
   }
// Sign In
   //const email = document.getElementById("email");
  // const password = document.getElementById("password");
      
 /*  email.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const emailHelp = document.getElementById("helpEmail");
      const regEmail = /.+@.+\..+/;
      
      if (e.target.value === "") emailHelp.textContent = "Field cannot be empty"; 
      else if (!regEmail.test(e.target.value)) emailHelp.textContent = "Invalid email address";
   });
   
   password.addEventListener("blur", function(e) {
      // must be a string as this you@domain.com
      const passwordHelp = document.getElementById("helpPassword");
      const regPassword = /.+@.+\..+/;
      
      if (e.target.value === "") passwordHelp.textContent = "Field cannot be empty"; 
      else if (e.target.value.length < 9) passwordHelp.textContent = "Field must contain at least 9 charactors";
      //else if (!regEmail.test(e.target.value)) emailHelp.textContent = "Invalid email address";
   });
*/
// Application
if (document.getElementById("amount") !== null) {
const loanAmount = document.getElementById("amount");
   
   loanAmount.addEventListener("blur", function(e) {
      const loanAmountHelp = document.getElementById("helpAmount");

      if (e.target.value === "") loanAmountHelp.textContent = "Field cannot be empty";
      else if (isNaN(e.target.value) === true) loanAmountHelp.textContent = "Field cannot contain a string";      
      else if (e.target.value < 20) loanAmountHelp.textContent = "Field must contain at least $ 20.00";
   });
}

/* Toggle between showing and hiding the navigation menu 
links when the user clicks on the hamburger menu / bar icon */
document.getElementById("hamburger").addEventListener("click", (e) => {
   console.log("clic");
   const navLinks = document.getElementById("navLinks");
   if (avLinks.style.display = "none") navLinks.style.display = "block";
   else if (navLinks.style.display = "block") navLinks.style.display = "none";

}); 

/* Home page */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('auth-home');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    console.log('click')
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});