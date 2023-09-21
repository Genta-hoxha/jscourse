'use strict';
/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price) {
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123', undefined, 2000);
//kur e deklaron ne fillim psh nummPassenger  = 1 dhe ne fund kur thirr funksionin i jep vlere 100, ath do marre vleren 100 ; nese ne fund kur behet thirrja i jepvleren undefined ath do marre vleren 1 qe kemi deklaruar ne fillim

*/
/*
const flight = 'LH234';
const genta = {
  name: 'Genta Hoxha',
  passport: 21458622446,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Ms.' + passenger.name;
  if (passenger.passport === 21458622446) {
    alert('Checked   in');
  } else {
    alert('Wrong passport!');
  }
};
checkIn(flight, genta);
console.log(flight);
console.log(genta);

//is the same as doing ...
const flightNum = flight;
const passenger = genta;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(genta);
checkIn(flight, genta);
*/

/*
//FUNCTIONS
//Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Marta', 'Adam', 'Ana'].forEach(high5); //Outputi:3 ✋ (pra per cdo emer kemi nga nje high five)

*/
/*
//Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Genta');
greetHey('Ana');

greet('Hello')('Florida');

//CHALLENGE (konverto funksionin me lart ne funksion array)

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Florida');
*/

// The  CALL and APPLY Methods
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
/*
lufthansa.book(239, 'Genta Hoxha');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//We have a problem, how to fix it???
//Si ti themi JS qe duam te krijojme nje booking ne new airline Eurowings???
//Ose si ti themi qe ne duam to book(te rezervosh) on Lufthasa
//Kemi 3 metoda funksioni per ta bere: CALL, APPLY , BIND

//CALL METHOD
const book = lufthansa.book;
// book(23, 'Sara Williams');
book.call(eurowings, 23, 'Sara Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'JONAS SCHMEDTMANN');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 587, 'Ana Smith'); //Output: Ana Smith booked a seat on undefined flight LX587
console.log(swiss); //Output:
// {airline: 'Swiss Air Lines', iataCode: 'LX', bookings: Array(1)}
// bookings:[{…}]
// iataCode: "LX"
// airline: "Swiss Air Lines"
// [[Prototype]]: Object

//APPLY METHOD
const flightData = [583, 'George Smith'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//BIND METHODS (return e new function)
// book.call(eurowings, 23, 'Sara Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Genta Hoxha');
bookEW23('Martha Cooper');
*/
/*
//Example with Event Listeners i rastit konkret, sa here te shtypim butonin "Buy new plane" te rritet numri
lufthansa.planes = 300; //supozojme qe kjo komapni ka 300 planes(avione)
lufthansa.buyPlane = function () {
  //shtojme e new method vetem per lufthansa object , pra me emrin buyPlane
  console.log(this);
  this.planes++; //duam qe sa here te shtypim butonin, te na shtohet nr i planes
  console.log(this.planes);
};
// lufthansa.buyPlane;
document
  .querySelector('.buy') //argumenti i pare ku kemi te bejme me selektimin e klases se butonit, qe ne kete rast e kemi emrin e klases buy
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //argumenti i dyte eshte handler function, keshtu qe addEventListener eshte higher order function e cila receives a callback function

/*
  // ME VLERE TJETER-----
lufthansa.planes = 20;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/
/*
//PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); //outputi: 123 pra 100 + 100*0.23
console.log(addVAT(23)); //outputi: 28.29 pra 23 + 23*0.23

//Create a function that can return a function dhe te beje ate qe ben addTax
//Pra cfare bera???
const addTaxNew = function (rate) {
  //krijova nje konstante me emrin addTaxNew me funksion me parameter(rate)
  return function (value) {
    //ktheva funksionin me parameter (value)
    console.log(value + value * rate); //formula qe do afishohet
  };
};
const addFinal = addTaxNew(0.1); //krijova nje konstante tjeter me emrin addFinal ku u barazua me addTaxNew (pra funsionin me vleren e rate)
addFinal(200); // dhe ketu i dhashe vleren e value
//Outputi do jete si outputi i addTax pra 220
*/

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. 
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the  input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
 which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().
  This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

*/
/*
//IIFE (Immediately Invoked Function Expressions)

const runOnce = (function () {
  console.log('This will never run again');
})(
  //IIFE
  function () {
    console.log('This will never run again');
  }
)();

(() => console.log('This will ALSO never run again'))();
*/
/*

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/

///Example CLOSURE
/*//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g(); //output: 46
h();
f();
console.dir(f);

// h(); //output: 1554
// f();

// console.dir(f);
*/
/*
//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
*/

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
