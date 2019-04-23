// Sign Up
   let firstName = document.getElementById("firstName");
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
/*const loanAmount = document.getElementById("amount");
   
   loanAmount.addEventListener("blur", function(e) {
      const loanAmountHelp = document.getElementById("helpAmount");

      if (e.target.value.isNaN(loanAmount)) loanAmountHelp.textContent = "Field cannot contain a string";      
      //if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });*/