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
   id: 3,
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

let output = "";

for (let i = 0; i < clients.length; i++) {
   output += "<tr><td>" + clients[i].fName + " " + clients[i].lName + 
             /*"</td><td>" + clients.address.home +
             "</td><td>" + clients.address.office*/ + 
             "</td><td>Verified</td></tr>";
}

//document.getElementById("clientsList").innerHTML = output;

//console.log(clients.length);

// Loans applications view
const loanApplicants = [
{
   clientID: 2,
   amount: 850.00,
   date: "02.13.2019 5:00"
},
{
   clientID: 3,
   amount: 550.00,
   date: "02.19.2019 12:00"
},
{
   clientID: 1,
   amount: 950.00,
   date: "02.22.2019 8:00"
}
];

let listLoans = "";

for (let i = 0; i < loanApplicants.length; i++) {
   listLoans += "<tr><td>" + getFullName(loanApplicants[i].clientID) + 
             "</td><td>" + Number(loanApplicants[i].amount) + " USD" +
             "</td><td>" + loanApplicants[i].date + 
             "</td></tr>";
}

document.getElementById("listLoaners").innerHTML = listLoans;

console.log(getFullName(3));

function getFullName (id) {
   for (let i = 0; i < clients.length; i++) {
      if (clients[i].id === id) return clients[i].fullName();      
   }
}



