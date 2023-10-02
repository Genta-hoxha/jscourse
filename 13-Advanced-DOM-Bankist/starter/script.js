'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

btnScrollTo.addEventListener('click', function (e) {
  //funksionit i japim nje parameter pra nje event
  //si fillim marrim kordinatat e elementit qe ne duam te scroll
  const s1coords = section1.getBoundingClientRect(); //method returns a DOMRect object DOMRect {x: 0, y: 227.1999969482422, width: 1519.2000732421875, height: 1670.25, top: 227.1999969482422, …}
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //Output: DOMRect {x: 184.60000610351562, y: 200.8000030517578, width: 110, height: 27.600000381469727, top: 200.8000030517578, …}

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); //Output: Current scroll (X/Y) 0 111.19999694824219
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  section1.scrollIntoView({ behavior: 'smooth' });
});
///// Page Navigation ////
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///DOM Traversing
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.computedStyleMap.color = 'white';
h1.lastElementChild.computedStyleMap.color = 'orangered';
///// Page Navigation ////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//IN EVENT DELEGATION we need 2 steps:
// 1. Do shtojme nje event listener to a common parent element (ne nje element prind te perbashket]) of all element that are interested in
//2. Determine what element originated the event (Përcaktoni se cili element e ka origjinën e ngjarjes)
//Nese klikojme te nje kategori psh te operations do dali ne console : //output : a class="nav__link" href="#section--2">Operations</a>
//Nese klikojme ne mes te nav bar psh te operations do dali ne console : //output : <ul class="nav__links">…</ul>flex

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   //Matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

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
/*
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
message.textContent = 'We use cookied to improved functionality and analytics';
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

//// DELETE ELEMENTS (elementin e cookies psh, pra kur te klikojme te butoni i cookies(Got it!)) do na hiqet i gjithe mesazhi
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//// STYLES ////
// message.style.backgroundColor = 'red'; //'#37383d'
message.style.width = '120%';
console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); // te tregon te consola se sa eshte height of this

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // ku te gjithe butonat primare u bene nga ngjyra jeshile ne ngjyre portokalli

//// ATTRIBUTES ////

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //output: Bankist logo
console.log(logo.src); //output: http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.designer);
console.log(logo.className); //output: nav__logo

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer')); //output: Jonas
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //output: http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.getAttribute('src')); //output: img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //output: http://127.0.0.1:5500/starter/index.html#
console.log(link.getAttribute('href')); //output: #
//// Data Attributes ////
console.log(logo.dataset.versionNumber); //output: 3.0

//// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//// DON'T USE
logo.className = 'jonas';
*/

/*
/////////// IMPLEMENTING SMOOTH SCROLLING ///////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //funksionit i japim nje parameter pra nje event
  //si fillim marrim kordinatat e elementit qe ne duam te scroll
  const s1coords = section1.getBoundingClientRect(); //method returns a DOMRect object DOMRect {x: 0, y: 227.1999969482422, width: 1519.2000732421875, height: 1670.25, top: 227.1999969482422, …}
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //Output: DOMRect {x: 184.60000610351562, y: 200.8000030517578, width: 110, height: 27.600000381469727, top: 200.8000030517578, …}
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); //Output: Current scroll (X/Y) 0 111.19999694824219
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); //Output: height/width viewport 327 1519
*/
//SCROOLLING
////// Menyra 1
/*
  // window.scrollTo(s1coords); kur klikojme butonin , te dergon te section1 por jo ne pozicion te sakte
  window.scrollTo(
    s1coords.left + window.pageXOffset, //current pozition + current scroll
    s1coords.top + window.pageYOffset
  ); //kur klikojme butonin , te dergon te section1 ne pozicion te sakte
*/

////// Menyra 2

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

////// Menyra 3 (modern way)

//   section1.scrollIntoView({ behavior: 'smooth' }); //pra marrim elementin qe duam te bejme scroll e cila eshte section1 dhe me pas ne e thirrim me scrollIntoView dhe me pas e kalojme ne nje objekt dhe specifikojme serish me  behavior: 'smooth'
// });

/////TYPES OF EVENTS  AND EVEND HANDLERS //////
/*
 const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  //mouseenter ben te mundur se sa here te kalosh mausin te h1 ne kete rast te dali nje alert me pershkrimin e dhene
  alert('addEventLinstener: Great! You are reading the heading');
});
*/
/*
const h4 = document.querySelector('h4');
h4.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading');
};

//Dy menyrat pse addEvenListener eshte me i mire
//Menyra 1
//Na lejon te shtojme multiple event listeners ne te njejtin event

//Menyra 2
// Na lejon qe te heqim nje event handler ne rast se nuk kemi me nevoje per te. Dhe për ta bërë këtë, së pari duhet ta eksportojmë funksionin në një funksion të emërtuar.
//EXAMPLE: kjo ben te mundur qe me nje mouseenter te ddali alert , pasoi e heqen dhe e con mausin perseri te h1 nuk do dali me alerti pasi i beme remove
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: HELLO! You are reading the heading');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
*/

/*
///// NDRYSHIM NGHYRASH TE NAV BAR RANDOM /////
//rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

//VETEM NJE LINK E NDRYSHON NGJYREN DHE JO E GJITHE NAV BAR
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK', e.target);
  this.style.backgroundColor = randomColor();
});

//E NDRYSHON NGJYREN E GJITHE NAV BAR

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINK', e.target);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Hello', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
*/

//////SMOOTH
