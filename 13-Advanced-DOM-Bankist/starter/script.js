'use strict';
/*
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

*/

//// SELECTING ELEMENTS ////

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//te tregon te gjithe section e atij projekti psh
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//te tregon te gjithe butonat e atij projekti psh
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//// CREATING AND INSERTING ELEMENTS ////
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied fo improved functionality and analytics';
message.innerHTML = //kjo ben te mundur read dhe set content
  'We use cookied fo improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>';
//Rasti 1 dhe Rasti 2 nuk i perdorim vetem to insert elements por dhe qe i levizim ato..... kjo eshte sepse DOM element eshte unike
/// Rasti 1 ///
// header.prepend(message);

/// Rasti 2 ///
header.append(message); //move dhe element from being the first child to being the last child

/// Rasti 3 ///
//to insert multiple copies te te njejtion element , ku si fillim kopjojme elementin e pare
// header.append(message.cloneNode(true));

/// Rasti 4 ///
// header.before(message);

/// Rasti 5 ///
// header.after(message);

//DELETE ELEMENTS (elementin e cookies psh, pra kur te klikojme te butoni i cookies(Got it!)) do na hiqet i gjithe mesazhi
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
