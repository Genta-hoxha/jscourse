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

//JS uses callbacks all the time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Marta', 'Adam'].forEach(high5); //Outputi:3 ✋ (pra per cdo emer kemi nga nje high five)
