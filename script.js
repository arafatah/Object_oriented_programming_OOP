'use strict';

//Constructor Function -Constructor function and regular function is almost same. But the main difference is only we call the contructor function with 'new' operator.
/* const Person = function (firstName, birthYear) {
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
console.log(john); */

// 1. New {} is created.
// 2. function is called, this = {} - new empty object.
// 3. {} - linked to prototype.
// 4. function automatically return {}

/* const foysal = new Person('foysal', 1999);
const hridoy = new Person('ridoy', 1999);
console.log(foysal, hridoy);

console.log(john instanceof Person);

Person.hey = function () {
  console.log('Hello there.!!! ✅');
};

Person.hey(); */
// We can't say John.hey() Because this is the prototype of this object.

// Prototype - All objects inherit properties and methods from a prototype
// console.log(Person.prototype);
/* Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
 */
/* 
john.calcAge();
foysal.calcAge();
console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(foysal));
console.log(Person.prototype.isPrototypeOf(Person));
 */
/* Person.prototype.species = 'Homo sapiens';
console.log(john.species, foysal.species);
 */
//The firstName is on the object but the species isn't on the object, its' on prototype.
/* console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('species'));
 */
/* Object Oriented Programming (OOP)  
Coding Challenge #1 
Your tasks: 
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h 
2. Implement an 'accelerate' method that will increase the car's speed
by 10, and log the new speed to the console 
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console 
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them 

Test data: 
§ Data car 1: 'BMW' going at 120 km/h 
§ Data car 2: 'Mercedes' going at 95 km/h 
GOOD LUCK 
 */

/* const Car = function (make, speed) {
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
}; */

/* const bmw = new Car('BMW', 120);
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
mercedes.brake(); */

// console.log(Object.prototype);
// console.log(bmw.__proto__.__proto__.__proto__);

/* const arr = [6, 2, 3, 3, 5, 6, 3];
console.log(arr.__proto__);
// console.log(arr.findLastIndex(el => el === 3));
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; */

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object > Null

// Class expression
// const PersonCl = class {};

// Class declaration - Jonas(Udemy) prefer this.
class PersonCl {
  // This is almost works like similar as constructor function.
  // But this one is method
  // Must call constructor
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype
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

  //Static method
  static hey() {
    console.log('Hello there.!!! ✅');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1998);
console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

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
PersonCl.hey();

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

// console.log(account.latest);

account.latest = 50;
// console.log(account.movements);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

/* Coding Challenge #2 
Your tasks: 
1. Re-create Challenge #1, 

but this time using an ES6 class (call it 'CarCl') 
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6) 
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6) 
4. Create a new car and experiment with the 'accelerate' and 'brake' 
methods, and with the getter and setter. 

Test data: 
§ Data car 1: 'Ford' going at 120 km/h 
 
GOOD LUCK 
 */
/* 
const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
 */
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed + 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUs = 50;
console.log(ford);

// Real classes do not exists in javaScript

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  /* DRY
  this.firstName = firstName;
  this.birthYear = birthYear; */
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

/* Coding Challenge #3 
Your tasks: 
1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property) 
2. Implement a 'chargeBattery' method which takes an argument 
'chargeTo' and sets the battery charge to 'chargeTo' 
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%' 
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definition of polymorphism 😉

Test data: 
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23% 
GOOD LUCK 
 */

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// If there is two function for prototype, then the first one will execute. *This will overwrite* 
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const Tesla = new EV('Tesla', 123, 23);
Tesla.chargeBattery(90);
console.log(Tesla);
Tesla.brake();
Tesla.accelerate();
Tesla.accelerate();

const BMW = new EV('BMW', 125, 60);
BMW.chargeBattery(20);
BMW.brake();
BMW.accelerate();
