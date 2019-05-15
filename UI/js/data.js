/*
* Quick Credit
* @author Abel Lifaefi Mbula
*/

/* eslint-env es6 */
/* eslint-disable */

const clients = [
   {
   id: 1,
   fName : "Patience",
   lName : "Kavira",
   fullName : function() {
      return this.fName + " " + this.lName;
   },
   phone : 08522452,
   email :"patkav@g.rw",
   address : {
      city : "Kisangani",
      home : "2, Makiso",
      office : "55, Tshopo"
   }
},

{
   id: 2,
   fName : "Jean-Mari",
   lName : "Kahola",
   fullName : function() {
      return this.fName + " " + this.lName;
   },
   phone : 08522452,
   email :"patkav@g.rw",
   address : {
      city : "Kisangani",
      home : "286, Mangobo",
      office : "55, Kisangani"
   }
},

{
   id: 3,
   fName : "Patie",
   lName : "Kav",
   fullName : function() {
      return this.fName + " " + this.lName;
   },
   phone : "08522452",
   email : "patkav@g.rw",
   address : {
      city : "Kisangani",
      home : "2, Makiso",
      office : "55, Tshopo"
   }
},

{
   id: 4,
   fName : "Joyce",
   lName : "Dimoke",
   fullName : function() {
      return this.fName + " " + this.lName;
   },
   phone : "08522452",
   email : "patkav@g.rw",
   address : {
      city : "Kisangani",
      home : "",
      office : "55, Tshopo"
   }
}
];

function getFullName (id) {
   for (let i = 0; i < clients.length; i++) {
      if (clients[i].id === id) return clients[i].fullName();      
   }
}

let output = "";

for (let i = 0; i < clients.length; i++) {
   output += "<tr><td>" + clients[i].fName + " " + clients[i].lName + 
             /*"</td><td>" + clients.address.home +
             "</td><td>" + clients.address.office*/ + 
             "</td><td>Verified</td></tr>";
}

//document.getElementById("clientsList").innerHTML = output;

// Loans applications view
const loanApplicants = [
{
   clientID: 2,
   amount: 850,
   date: "02.13.2019 5:00",
   status: "current"
},
{
   clientID: 3,
   amount: 550,
   date: "02.19.2019 12:00",
   status: "paid"
},
{
   clientID: 1,
   amount: 950,
   date: "02.22.2019 8:00",
   status: "current"
},
{
   clientID: 4,
   amount: 950.00,
   date: "02.22.2019 8:00",
   status: ""
}
];

let listLoans = "";

for (let i = 0; i < loanApplicants.length; i++) {
   let rowColor = '';
   if (i % 2 != 0) rowColor = 'rowColor';
   
   // allow decimal with .toFixed(2)
   listLoans += "<tr class=" + `${rowColor}` + "><td>" + getFullName(loanApplicants[i].clientID) + 
             "</td><td class='money'>" + "$" + Number(loanApplicants[i].amount).toFixed(2) +
             "</td><td>" + loanApplicants[i].date + 
             "</td></tr>";
}

document.getElementById("listLoaners").innerHTML = listLoans;
document.getElementById("numberLoans").innerHTML = loanApplicants.length + " loans (all).";

// View Current loans
const currentLoans = [];

for (let i = 0; i < loanApplicants.length; i++) {
   if (loanApplicants[i].status === "current") {
      currentLoans.push(loanApplicants[i]);
      
   }
   
}

let listCurrentLoans = "";

for (let i = 0; i < currentLoans.length; i++) {
   let rowColor = '';
   if (i % 2 != 0) rowColor = 'rowColor';
   listCurrentLoans += "<tr class=" + `${rowColor}` + "><td>" + getFullName(currentLoans[i].clientID) + 
             "</td><td class='money'>" + "$" + Number(currentLoans[i].amount).toFixed(2) +
             "</td><td>" + currentLoans[i].date + 
             "</td></tr>";
}

const paidLoans = [];

for (let i = 0; i < loanApplicants.length; i++) {
   if (loanApplicants[i].status === "paid") {
      paidLoans.push(loanApplicants[i]);
      
   }
   
}

let listPaidLoans = "";

for (let i = 0; i < paidLoans.length; i++) {
   let rowColor = '';
   if (i % 2 != 0) rowColor = 'rowColor';
   listPaidLoans += "<tr class=" + `${rowColor}` + "><td>" + getFullName(paidLoans[i].clientID) + 
             "</td><td class='money'>" + "$" + Number(paidLoans[i].amount).toFixed(2) + 
             "</td><td>" + paidLoans[i].date + 
             "</td></tr>";
}


// Get filter
const all = document.getElementById("all");
const current = document.getElementById("currentLoans");
const paid = document.getElementById("paidLoans");

// Then add listeners
all.addEventListener("click", function () {
   if (document.getElementById("listCurrentLoaners")) {
      document.getElementById("listCurrentLoaners").id = "listLoaners";
   } else document.getElementById("listPaidLoaners").id = "listLoaners";

   //document.getElementById("listCurrentLoaners").id = "listLoaners";
   document.getElementById("listLoaners").innerHTML = listLoans;
   document.getElementById("numberLoans").innerHTML = "All Loans (" + loanApplicants.length + ")";
});

current.addEventListener("click", function () {
   if (document.getElementById("listLoaners")) {
      document.getElementById("listLoaners").id = "listCurrentLoaners";
   } else document.getElementById("listPaidLoaners").id = "listCurrentLoaners";
   
   document.getElementById("listCurrentLoaners").innerHTML = listCurrentLoans;
   document.getElementById("numberLoans").innerHTML = "Current loans (" + currentLoans.length + ")";
}); 

paid.addEventListener("click", function () {
   if (document.getElementById("listLoaners")) {
      document.getElementById("listLoaners").id = "listPaidLoaners";
   } else document.getElementById("listCurrentLoaners").id = "listPaidLoaners";

   document.getElementById("listPaidLoaners").innerHTML = listPaidLoans;
   document.getElementById("numberLoans").innerHTML = "Repaid loans (" + paidLoans.length + ")";
}); 


