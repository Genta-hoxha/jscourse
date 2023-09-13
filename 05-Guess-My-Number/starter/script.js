'use strict';
/*
console.log(document.querySelector('.message').textContent); // eshte nje objekt qe eshte available ne object of document. Ne kete metode duhet te kaloje ne nje Selector, ku ky Selector eshte i njejti me Selector qe ne kemi perdorur ne CSS.
//Pra, ne kalojme nje string dhe ne kerkojme te selektojme elementin me emer klase of message
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

/*------------------CREATE A GAME-------------------------------- */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// krijojme nje funksion ku do te refactor(pra ato qe kemi te dublikuara ti thirrim me ane te ketij funksioni)
//document.querySelector('.number').textContent = secretNumber;  //kjo tregon numrin sekret, por do e shhfaqim kur nr te jete korrekt
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}; //  const x = function () {
//   console.log(23);
// };
//te click butonin check!

document.querySelector('.check').addEventListener('click', function () {
  //  console.log(document.querySelector('.guess').value); //vendosim guess sepse eshte emri i klases se inputit//duhet te vendosim klasen e butonit, ne kete rast jane dyy klasa eshte dhe klasa btn dhe klasa check , por ne klasen btn nuk na intereson sepse eshte dhe per butonin again, kshuqe na duhet vetem klasa check
  //  document.querySelector('.message').textContent = 'Correct Number!';
  // const guess = document.querySelector('.guess').value;
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber; // ktu do shfaqet dhe nr qe ishte i fshehur
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong     // dhe shkurtimi i kodit, duke bere kushtin nese jane te ndryshme nga njeri tjetri
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!'); //vendoset ne kete forme
      score--; //score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!'); // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //   //When guess is too high
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High!';
    //     score--; //score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--; //score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});
//game logic

/*---------------CHALLENGE 1-------------* */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //alert('Try Again with another number!');
  // const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  displayMessage('Start guesing...'); // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').value = '';
  document.querySelector('body').style.backgroundColor = 'blue';
  document.querySelector('.number').style.width = '30rem';
});
//si te eleminojme kodin e dublikuar
