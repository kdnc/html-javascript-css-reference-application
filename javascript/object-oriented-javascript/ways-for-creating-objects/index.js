/*object literal pattern*/
var myObj = {name: "Richard", profession: "Developer"}; 

/*the prototype pattern, adding each method and property directly on 
the object’s prototype.*/
function Employee () {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
	return this.firstName + " " + this.lastName; 
};

var abhijit = new Employee () //​
console.log(abhijit.fullName()); // Abhijit Patel​
console.log(abhijit.signedNDA); // true

/*constructor pattern, a constructor function (Classes in other languages, 
but Functions in JavaScript)*/
function Employee (name, profession) {
	this.name = name;
	this.profession = profession;
} // Employee () is the constructor function because we use the <em>new</em> keyword below to invoke it.​

var richard = new Employee ("Richard", "Developer") // richard is a new object we create from the Employee () constructor function.​

console.log(richard.name); //richard​
console.log(richard.profession); // Developer