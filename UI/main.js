const loanAmount = document.getElementById("amount");
   
   loanAmount.addEventListener("blur", function(e) {
      const loanAmountHelp = document.getElementById("helpAmount");

      if (e.target.value.isNaN(loanAmount)) loanAmountHelp.textContent = "Field cannot contain a string";      
      //if (e.target.value.length === 1) firstNameHelp.textContent = "Field must contain at least 2 letters";
   });

console.log("tedt");