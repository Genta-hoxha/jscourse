'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

/////////////////////////////////// TABBED COMPONENT ///////////////////////////////////
/* const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content'); */

//tabs.forEach(t => t.addEventListener('click', () => console.log('TAB'))); //nese do kishim 200 copies ateher do u ngadalesonte faqa me kete lloje menyre, dhe ne kete rast na vjen ne ndihme event delegation
/*
//// EVENT DELEGATION ////
// ~ ku need to attach evend handler ne elementin prind te perbashket nga te gjithe elementet qe ne jemi te interesuar.
// ~ ne rastin tone kemi 3 butona, dhe nje parent te perbashket e cila teshte tab-container
//RASTI 1
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target;
  console.log(clicked);
});
//OUTPUTI KUR KLIKOJME SECILIN BUTON:
//<button class="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">…</button>
//<button class="btn operations__tab operations__tab--2" data-tab="2">…</button>
//<button class="btn operations__tab operations__tab--3" data-tab="3">…</button>

//RASTI 2
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.parentElement;
  console.log(clicked);
});
//OUTPUTI KUR KLIKOJME SECILIN BUTON:
//<div class="operations__tab-container">…</div>flex
//<div class="operations__tab-container">…</div>flex
//<div class="operations__tab-container">…</div>flex
*/
//RASTI 3 shfaq rezultatin si rasti 1 por do e shpejtoje aplikacionin
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Active Tab
  clicked.classList.add('operations__tab--active');
  //Active content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//// MENU FADE ANIMATION ////
// QE TE MOS BEJME SHUME PERSERITJE DO BEJME REFACTOR CODE
//Ku behet duke krijuar nje funksion te ri dhe me pas te dy funsionet me poshgrte do krahasojme cfare kane te perbashket dhe cfare kane ndryshe
const handleHover = function (e, opacity) {
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //parent of nav__link eshte nav__item
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
//ky funksioni me poshte eshte nje parameter
/* function (e) {
  handleHover(e, 1);
}*/
/*
//DO PERDORIM DY FUNKSIONE: - MOUSEOVER -  E PARA ESHTE KUR I BEN FADE DHE THEKSON NJEREN
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //parent of nav__link eshte nav__item
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

// - MOUSEOUT -  DHE TE TJETREN KUR E HEQ MAUSIN NGA NJERA PJESA TJETER TE BEHET SERISH ME NGJYRE SIC ISHTE
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target; //parent of nav__link eshte nav__item
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

*/

/////////////////////////////////// STICKY NAVIGATION ///////////////////////////////////
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

/////////////////////////////////// STICKY NAVIGATION, A BETTER WAY: THE INTERSECTION OBSERVER API ///////////////////////////////////
// To use the intersection observer API, we need to start  by creating a new intersection observer si meposhte:
//this callback function will get called each time that the observed element
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2], //threshold = 10%
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
/*NOTES: this object need first root property and this root is the element that the target is intersecting so our targetr element here, is intersecting the root element at the threshold that we defined
  Ne kete shembull aktual, kudoqofte the first section(pra targeti yne section1) is intersecting the viewport at 10%, so the viewport, sepse eshte root dhe 10% sepse eshte threshold
 Pra, kurdo qe te ndodhe. ky funksioni ketu  obsCallback do te thirret dhe nuk ka rendesi nese ne jemi duke bere scrolling UP or DOWN.
  Kete funksion ne do ta thirrim me 2 argumente : entries, observer dhe objekti me poshte me const observer do te kaloje ne callback function.
  Tani ne kete rast ne jemi te interesuar vetem ne hyrjet(entries), por ndonjehere duke perdorur the observer eshte gjithashtu i dobishem.
  Tani ne aktualisht kemi multiple thresholds, ku ketu ne mund te kemi nje array dhe do e bejme tani, keshtu qe entries si parametri i pare jane aktualisht nje array of the threshold 
  entries, keshtu ne kete rast perseri eshte vetem nje element ketu, por do krijojme nje funksion me te pergjithshem ku loops mbi keto entries
  */

const header = document.querySelector('.header'); //kjo eshte nje element me klasen e header
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //is very important
}); //ketu krijuam observer tone,ku kete here jam duke e quajtur headerObserver

headerObserver.observe(header);
//How to calculate this height dynamically???
//Do perdorim funksionin getBoundingClientRect sepse për shembull, nëse keni një web responsive, atëherë me siguri madhësia e të gjithë elementëve do të ndryshojë në pika të caktuara

//////////////////////////////////////// REVEALING ELEMENTS ON SCROLL ////////////////////////////////////////
//Kemi 4 section dhe kemi klasen section--hidden , do aplikojme kete klase ne te 4 section
// nga keshtu: <section class="section" id="section--1">
//do behet keshtu: <section class="section section--hidden" id="section--1">
// dhe nuk do shfaqet asgje pervac nav bar dhe h1
//// SI DO TI REMOVE KETE KLASE KUR TI BEJME SCROOL ////
//// do na vije ne ndiihme REVEAL SECTIONS //////////

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

////////////////////////////////////   LAZY LOADING IMAGES ////////////////////////////////////
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function () {});
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////////// SLIDER ////////////////////////////////
/*
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px';
slider.style.overflow = 'visible';
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%, 100%, 200%, 300%

//Next slide
btnRight.addEventListener('click', function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
});
// curSlide = 1: -100%, 0%, 100%, 200%
*/

//// HOW TO REFACTOR  THIS CODE (SLIDE)////
//Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  //Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = "dots__dot" data-slide="${i}></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide ="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {};
  goToSlide(0);
  createDots();
  activateDot(0);
  init();
  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

/////////////////////////////////// lIFECYCLE DOM EVENTS ///////////////////////////////////
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//do dali nje dritare si alert kur i bejme refresh faqes, ku thote qe Changes you made may not be saved. Reload ose Cancel
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
//OUTPUTI KUR KLIKOJME SECILIN BUTON:
/*
/////////////////////////////////// DOM TRANSVERSING ///////////////////////////////////
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //ben te mundur qe brenda h1 te listoje cdo element : [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // ben te mundur qe te listoje brenda h1 vetem html collection: [span.highlight, br, span.highlight]
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-primary)'; //backgroundi vetem per section of header merr ngjyre
// h1.closest('h1').style.background = 'var(--gradient-secondary)'; //ngjyrosim vetem backgrounfi i h1

//Going sideways: siblings
console.log(h1.previousElementSibling); //null sepse nuk ka element para h1
// console.log(h4.previousElementSibling); // h1 <h1 style="background: var(--gradient-secondary);">…</h1>
console.log(h1.nextElementSibling); //h4 sepse pas h1 kemi h4 <h4>A simpler banking experience for a simpler life.</h4>

console.log(h1.previousSibling); //#text
console.log(h1.nextSibling); //#text

console.log(h1.parentElement.children); // output: HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)'; //te zvogelon elementet e tjera qe jane pjese e h , por vetem h1 nuk ndryshon
// });
*/
/////////////////////////////////// PAGE NAVIGATION ///////////////////////////////////
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
/////////////////////////////////// SELECTING ELEMENTS ///////////////////////////////////

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

/////////////////////////////////// CREATING AND INSERTING ELEMENTS ///////////////////////////////////
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

/////////////////////////////////// STYLES ///////////////////////////////////
// message.style.backgroundColor = 'red'; //'#37383d'
message.style.width = '120%';
console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); // te tregon te consola se sa eshte height of this

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered'); // ku te gjithe butonat primare u bene nga ngjyra jeshile ne ngjyre portokalli

/////////////////////////////////// ATTRIBUTES ///////////////////////////////////

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

/////////////////////////////////// CLASSES ///////////////////////////////////
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

/////////////////////////////////// SCROOLLING ///////////////////////////////////
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

/////////////////////////////////// TYPES OF EVENTS  AND EVEND HANDLERS ///////////////////////////////////
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
/////////////////////////////////// NDRYSHIM NGHYRASH TE NAV BAR RANDOM ///////////////////////////////////
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
