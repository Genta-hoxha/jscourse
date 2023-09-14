'use strict';
/*
const myName = 'Jonas';

function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age}-old ${job}`);
  }
  second();
}
first();
*/
/*
const a = 'Jonas';
first();

function first() {
  const b = 'Hello!';
  second();
  function second() {
    const c = 'Hi!';
    third();
  }
}
function third() {
  const d = 'Hey!';
  console.log(d + c + b + a); //ReferenceERROR
}
*/

/*
function calcAge(birthYear) {
  //calcAge defined ne nje global scope sepse eshte ne top level code
  const age = 2023 - birthYear;
  //   console.log(firstName);

  //how to create function inside function
  function printAge() {
    const output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      console.log(`Oh, and you are a millenial, ${firstName}`);
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}

//create a global variable
const firstName = 'Genta';
calcAge(1996);
//console.log(age);
//printAge();

*/

/*
const myName = 'Genta';
if (myName === 'Genta') {
  //TDZ for job variable (Pra, ReferenceError: Cannot access 'job' before initialization)
  console.log(`Genta is a ${job}`);
  const age = 2023 - 1996;
  console.log(age);

  const job = 'programmer';
  console.log(x);   //ReferenceError: x is not defined
}
*/

/*----HOISTING AND TDZ in PRACTICE ------*/
/*
//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Genta';
let job = 'programmer';
const year = 1996;

//Functions
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  //is in TDZ sepse ka const perpara
  return a + b;
};

const addArrow = (a, b) => a + b;
//Notes: The only function than can uyse before declaring , is the function declaration
*/
/*
//Example
console.log('undefined');
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //Outputi: true
console.log(y === window.y); //Outputi: false
console.log(z === window.z); //Outputi: false
*/

/*
//THIS KEYWORD
//console.log(this);
const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(1996);

const jonas = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

const genta = {
  year: 1990,
};
genta.calcAge = jonas.calcAge;
genta.calcAge();

// const f = jonas.calcAge;
// f();
*/

/*----Regular functions vs.Arrow functions------*/
/*
//var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    //console.log(this);
    console.log(2023 - this.year);

    //METHOD 1

    // const self = this;
    // const isMillenial = function() {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //METHOD 2

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //     //PROBLEM OR BUG IN JAVASCRIPT
  //     const isMillenial = function () {
  //       console.log(this);
  //       console.log(this.year >= 1981 && this.year <= 1996);
  //     };
  //     isMillenial();

  //     //HOW TO SOLVE
  //     //METHOD 1 (ku duhet te perdorim nje variabel ekstra ku zakonisht e quajme self )
  //     //do shtojme const self = this; (pasi ketu jemi jashte nga funksioni isMillennial)
  //
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); //pra nese e leme me funksionin arrow ne output do kemi : Hey undefined
    //   greet: function () {
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`); // nese do kishim kete lloj funksioni ath outputi do jete: Hey Jonas
  },
};
jonas.greet();
jonas.calcAge();


//arguments keyword

const addExpr = function (a, b) => {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);
*/

/*------Primitives vs. Objects ------------*/
/*let age = 26;
let oldAge = age;
age = 27;
console.log(age);
console.log(oldAge);

//create an object me
const me = {
  name: 'Genta',
  age: 26,
};

//create an object for friends equals me
const friend = me;
friend.age = 28; //ne kete rast dhe age of me is 28
console.log('Friend:', friend);
console.log('Me', me);
*/
//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// create an object called jessica
//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

//create an object per jessica te martuar
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Coping objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2); //berja e merge te dy objekteve
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
