'use strict';

//Constructor Function -Constructor function and regular function is almost same. But the main difference is only we call the contructor function with 'new' operator.
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.lastName = lastName;
  // console.log(this);

  //Never create a method inside of contractor function. "Never do this"
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const john = new Person('John', 1990, 'week');
console.log(john);

// 1. New {} is created.
// 2. function is called, this = {} - new empty object.
// 3. {} - linked to prototype.
// 4. function automatically return {}

const foysal = new Person('foysal', 1999);
const hridoy = new Person('ridoy', 1999);
console.log(foysal, hridoy);

console.log(john instanceof Person);

// Prototype - All objects inherit properties and methods from a prototype
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

john.calcAge();
foysal.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(foysal));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo sapiens';
console.log(john.species, foysal.species);

//The firstName is on the object but the species isn't on the object, its' on prototype.
console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));


/* Object Oriented Programming (OOP)  
Coding Challenge #1 
Your tasks: 
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h 
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console 
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console 
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them 
Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h 
GOOD LUCK 
 */