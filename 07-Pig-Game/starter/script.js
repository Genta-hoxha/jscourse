'use strict';
//Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector('#score--0'); //vendoset # per ID ndersa . per klasa
const score1El = document.getElementById('score--1'); //jane te njejta, por getElementById  eshte me e shpejte psh nese do kemi shume elemente, ne kete rast # per id nuk vendoset
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  scores = [0, 0]; //do krijojme nje array ku do ruajme te dhenat(piket) e dy lojtareve
  currentScore = 0; // per te ruajtur piket
  activePlayer = 0;
  playing = true; // nese deshiron te vazhdosh lojen

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //diceEl.classList.add('hidden'); //nese duam te fshehim dice nga loja
  player0El.classList.remove('player--winner'); //ben te mundur kur klikon new game te hiqet ngjyra e zeze e fituesit
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// do krijojme nje funksion me emrin switchPlayer ku do reuse kodin qe kemi per switch player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Need to select roll button(Rolling dice functionality)
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // sa here te klikojme butonin roll dice te na afishohen te gjitha fotot qe kemi listuar(pra te gjitha pikat e dice)

    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice; //currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; //Change later (kjo bente te mundur qe nese kalojme te playeri tjeter , piket e atij playeri ti shtoheshin dhe playerit0)
    } else {
      /*
    //switch to next player (kete kodin do e reuse per nje funksion me emrin switchPlayer)
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    //ketu do tregojme switch active player
    player0El.classList.toggle('player--active'); //toggle method ben te mundur shtimin e klases nese nuk eshte ketu, dhe nese eshte ketu e ben remove
    player1El.classList.toggle('player--active');
    */
      // Menyra e shkurter kur kemi krijuar nje funksion per switch player dhe tani e tthirrim vetem me emrin e funksionit
      switchPlayer();
    }
  }
});

// Features HOLD

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore;
    //console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden'); //kur fiton nje player bejme te mundur dhe zhdukjen e dice nga loja
      document
        .querySelector(`.player--${activePlayer}`) //kur ne perdorim querySelector neve na duhet actual selector, cka do te thote qe duhet te vendosim .emrin e klases
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);

//RESET BUTTON
/*
document.querySelector('.btn--new').addEventListener('click', function () {
  // score0El.textContent = 0;
  // score1El.textContent = 0;
  // current0El.textContent = 0;
  // current1El.textContent = 0;
  // player0El.classList.remove('player--winner'); //ben te mundur kur klikon new game te hiqet ngjyra e zeze e fituesit
  // player1El.classList.remove('player--winner');
  // player0El.classList.add('player--active');
  // player1El.classList.remove('player--active');

  document.querySelector('#score--0').value = '';
  document.querySelector('#score--0').value = '';
  document.querySelector('#score--1').value = 0;
  document.querySelector('#current--0').value = 0;
  document.querySelector('#current--1').value = 0;

  if (scores[activePlayer] >= 20) {
    diceEl.classList.remove('hidden');
  }
});*/
