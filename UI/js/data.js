/* eslint-env es6 */
/* eslint-disable */

const clients = [
   {
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
   fName : "Joyce",
   lName : "Kav",
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