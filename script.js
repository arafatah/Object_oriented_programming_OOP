'use strict';

//Constructor Function -Constructor function and regular function is almost same. But the main difference is only we call the contructor function with 'new' operator.
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // console.log(this);

  //Never create a method inside of contractor function. Never do this.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const john = new Person('John', 1990);
console.log(john);

// 1. New {} is created.
// 2. function is called, this = {} new empty object.
// 3. {} linked to prototype.
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



