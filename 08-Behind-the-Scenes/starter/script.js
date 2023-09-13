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
