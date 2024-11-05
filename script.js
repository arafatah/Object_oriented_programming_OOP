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

Person.hey = function(){
  console.log('Hello there.!!! ✅')
}


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

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

console.log(Object.prototype);
console.log(bmw.__proto__.__proto__.__proto__);

const arr = [6, 2, 3, 3, 5, 6, 3];
console.log(arr.__proto__);
// console.log(arr.findLastIndex(el => el === 3));
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object > Null

// Class expression
// const PersonCl = class {};

// Class declaration - Jonas prefer this.
class PersonCl {
  // This is almost works like similar as constructor function.
  // But this one is method
  // Must call constructor
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2039 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exits
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizen
// 3. Classes always executed in strict mode
//** Classes hide the true nature of javaScript */

const walter = new PersonCl('walter white', 1965);

const account = {
  owner: 'Jonas',
  movements: [299, 482, 432, 213, 524],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Any setter should be have one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


