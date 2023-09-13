'use strict';

const modal = document.querySelector('.modal'); //selektuam nje element ne variablin modal duke perdorur selektor por tani ne do tre ruajme rezultatin
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsShowModel = document.querySelectorAll('.show-modal');
console.log(btnsShowModel);

const showModal = function () {
  //console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//1.Menyra e shkurter
for (let i = 0; i < btnsShowModel.length; i++) {
  btnsShowModel[i].addEventListener('click', showModal);

  btnCloseModel.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//2.Menyra e gjate
//   for (let i = 0; i < btnsShowModel.length; i++) {
//     btnsShowModel[i].addEventListener('click', function () {
//       console.log('Button clicked');
//       modal.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//     });
//   btnCloseModel.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//   overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
