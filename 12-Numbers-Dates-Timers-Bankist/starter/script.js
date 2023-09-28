'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const month = ` ${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // const date = new Date(acc.movementsDates[i]);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = ` ${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    //In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When time is 0 seconds, stop timer and logout user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    //Decrese 1s
    time--;
  };

  //Set time to 5 minutes
  let time = 300;

  //Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

//dhe tani do e therrasim funksionin startLogOutTimer te logini

///////////////////////////////////////
/// Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //'2-digit'
  year: 'numeric',
  weekday: 'long',
};
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Create current date and time (pra vendos daten aktuale)
    /*
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = ` ${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = now.getHours();
    const min = now.getMinutes();
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
*/

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //thirrja ktu
    startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(23 === 23.0); //output: true
//Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333333
//Binary base 2 - 0 1
console.log(0.1 + 0.2); //output: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //output: false

console.log('Conversion');
console.log(Number(23)); //output: 23 (numer)
console.log(+'23'); //output: 23 (numer)
console.log('23'); //output: 23 (string)

console.log('Parsing (kthen nr te plote te rrenjes)');
console.log(Number.parseInt('30px')); //output: 30 (numer)
console.log(Number.parseInt('30px', 10)); //output: 30
console.log(Number.parseInt('e23x')); //output: NaN
console.log(Number.parseInt('e23', 10)); //output: NaN

console.log(Number.parseFloat('2.5rem')); //output: 2.5 (numer)
console.log(Number.parseInt('2.5rem')); //output: 2 (numer)

console.log('Check if value is NaN');
console.log(Number.isNaN(20)); //output: false
console.log(Number.isNaN('20')); //output: false
console.log(Number.isNaN(+'20X')); //output: true
console.log(Number.isNaN(23 / 0)); //kjo duhet te japi infinit output: false

console.log('Checking if value is number');
console.log(Number.isFinite(20)); //output: true
console.log(Number.isFinite('20')); //output: false
console.log(Number.isFinite(+'20X')); //output: false
console.log(Number.isFinite(23 / 0)); //output: false

console.log(Number.isInteger(23)); //output: true
console.log(Number.isInteger(23.0)); //output: true
console.log(Number.isInteger(23 / 0)); //output: false

console.log('MATH');
console.log(Math.sqrt(25)); //output: 5
console.log(25 ** (1 / 2)); //output: 5 (Pra rrenja katrore e nr 25)
console.log(8 ** (1 / 3)); //output: 2 (Pra rrenja katrore e nr 8)

console.log('MAX');
console.log(Math.max(5, 18, 23, 11, 2)); //output: 23
console.log(Math.max(5, 18, '23', 11, 2)); //output: 23
console.log(Math.max(5, 18, '23px', 11, 2)); //output: NaN

console.log('MIN');
console.log(Math.min(5, 18, 23, 12, 2)); //output: 2

console.log(Math.PI * Number.parseFloat('10px') ** 2); //output: 314.1592653589793
console.log(Math.trunc(Math.random() * 6) + 1); //output: 6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log('//0...1 => 0...(max - min) => min ... max');
console.log(randomInt(10, 20)); //ndryshon vlere sa here i japim refresh

console.log('Rounding Integers');
console.log(Math.trunc(23.3)); //output: 23
console.log(Math.trunc(23.9)); //output: 23
console.log(Math.round(23.3)); //output: 23
console.log(Math.round(23.9)); //output: 24
console.log(Math.ceil(23.3)); //output:24
console.log(Math.ceil(23.9)); //output: 24
console.log(Math.floor(23.3)); //output:23
console.log(Math.floor(23.9)); //output: 23
console.log(Math.floor('23.9')); //output: 23

console.log('Trunc vs. floor Me e mire eshte floor');
console.log(Math.trunc(-23.3)); //output: -23
console.log(Math.floor(-23.3)); //output: -24

console.log('Rounding Decimals');
console.log((2.7).toFixed(0)); //output: 3
console.log((2.7).toFixed(3)); //output: 2.700
console.log((2.345).toFixed(2)); //output: 2.35 (string)
console.log(+(2.345).toFixed(2)); //output: 2.35 (numer)

/*
//PSH te besh nje row me ngjyre dhe nje row pa ngjyre(white) te rasti i BANKIST APP
//Pra, kur klikojme te current balance , athere do ndryshphen ngjyrat
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // if (i % 3 === 0) row.style.backgroundColor = 'grey';
    if (i % 2 === 0) row.style.backgroundColor = 'pink';
  });
});
*/
//Numeric Separators
const nr1 = 120_12_15_200;
console.log(nr1); //output: 1201215200

//Working with BigInt
console.log(2 ** 53 - 1); //output: 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //output: 9007199254740991
console.log(2 ** 53 + 1); //output: 9007199254740992
console.log(2 ** 53 + 2); //output: 9007199254740994
console.log(2 ** 53 + 3); //output: 9007199254740996
console.log(2 ** 53 + 4); //output: 9007199254740996

console.log(4845652565888255565685214665656n);
console.log(BigInt(4845652));

//  Create dates
// const now1 = new Date();
// console.log(now); //output: Wed Sep 27 2023 14:51:23 GMT+0200 (Central European Summer Time)

console.log(new Date('Sep 27 2023 14:51:23')); //output: Wed Sep 27 2023 14:51:23 GMT+0200 (Central European Summer Time)
console.log(new Date('December 24, 2015')); //output:Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time)
/*
console.log(new Date(account1.movementsDates[0])); //output:Mon Nov 18 2019 22:31:17 GMT+0100 (Central European Standard Time)
console.log(new Date(2037, 10, 19, 15, 23, 5)); //output: Thu Nov 19 2037 15:23:05 GMT+0100 (Central European Standard Time)
console.log(new Date(2037, 10, 31)); //output: Tue Dec 01 2037 00:00:00 GMT+0100 (Central European Standard Time)
console.log(`Genta ka lindur ${new Date(1996, 3, 26, 12, 5)}`); //output: Genta ka lindur Fri Apr 26 1996 12:05:00 GMT+0200 (Central European Summer Time)
console.log(new Date(2004, 10, 6)); //output: Sat Nov 06 2004 00:00:00 GMT+0100 (Central European Standard Time)

//Working with dates
const future = new Date(1996, 4, 26, 12, 5);
console.log(future);
console.log(future.getFullYear()); //output: 1996
console.log(future.getMonth()); //output:4
console.log(future.getDate()); //output:26
console.log(future.getDay()); //output:0
console.log(future.getHours()); //output:12
console.log(future.getMinutes()); //output:5
console.log(future.getSeconds()); //output:0
console.log(future.toISOString()); //output: 1996-05-26T10:05:00.000Z
console.log(future.getTime()); //output: 833105100000

//Add date to the Bankist APP
//FAKE ALWAYS LOGGES IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = ` ${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;


*/
/*
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2023, 3, 14), new Date(2023, 3, 4));
console.log(days1); //output: -10 (days) nese do e bejme te funksioni Math.abs ath do e eliminonim shenjen minus (-)
*/
//Nese do ta bejme te aplikacioni i Bankist qe nuk vendosim daten e transferimit te lekeve, opr diten, psh Today, yesterday ose 2(varet sa dite para) days ago
//Functions
// const formatMovementDate = function (date) {
//   const calcDaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//   const daysPassed = calcDaysPassed(new Date(), date);
//   console.log(daysPassed);

//   if (daysPassed === 0) return 'Today';
//   if (daysPassed === 1) return 'Yesterday';
//   if (daysPassed <= 7) return `${daysPassed} days ago`;
//   else {
//     const day = `${now.getDate()}`.padStart(2, 0);
//     const month = ` ${now.getMonth() + 1}`.padStart(2, 0);
//     const year = now.getFullYear();
//     return `${day}/${month}/${year}`;
//   }
// };
/*
//ORDER PIZZA
//setTimeout(() => console.log('Here is your pizza'), 3000)//pra afishohet fjalia pas 3 sekondash ne console
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
*/
/*
// TE kthen ne output cdo 10 sekonda oren dhe daten aktuale
//Thu Sep 28 2023 10:29:46 GMT+0200 (Central European Summer Time)
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 10000);
*/
