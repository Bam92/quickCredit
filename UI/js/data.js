/*
* Concert Seat
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
   amount: 850.00,
   date: "02.13.2019 5:00",
   status: "current"
},
{
   clientID: 3,
   amount: 550.00,
   date: "02.19.2019 12:00",
   status: ""
},
{
   clientID: 1,
   amount: 950.00,
   date: "02.22.2019 8:00",
   status: "current"
}
];

let listLoans = "";

for (let i = 0; i < loanApplicants.length; i++) {
   let rowColor = '';
   if (i % 2 != 0) rowColor = 'rowColor';
   
   listLoans += "<tr class=" + `${rowColor}` + "><td>" + getFullName(loanApplicants[i].clientID) + 
             "</td><td>" + Number(loanApplicants[i].amount) + " USD" +
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
             "</td><td>" + Number(currentLoans[i].amount) + " USD" +
             "</td><td>" + currentLoans[i].date + 
             "</td></tr>";
}


const current = document.getElementById("currentLoans");
const all = document.getElementById("all");

all.addEventListener("click", function () {
   document.getElementById("listCurrentLoaners").id = "listLoaners";
   document.getElementById("listLoaners").innerHTML = listLoans;
   document.getElementById("numberLoans").innerHTML = loanApplicants.length + " loans (all).";
});

current.addEventListener("click", function () {
   document.getElementById("listLoaners").id = "listCurrentLoaners";
   document.getElementById("listCurrentLoaners").innerHTML = listCurrentLoans;
   document.getElementById("numberLoans").innerHTML = currentLoans.length + " current loans.";
}); 

console.log(currentLoans);



