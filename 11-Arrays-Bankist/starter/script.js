'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//Shfaqja e levizjeve (Depozitimet dhe Terheqjet )
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //merr te dhenat e html dhe ben zevendesimin e elementit me insertAdjacentHTML()

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div> 
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //insertAdjacentHTML analizon nje text te html dhe me pas fut rezultatin ne nje pozicion  te caktuar, ne kete rast e donim ne poz.afterbegin
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummay = function (acc) {
  //vendosim si parameser account pra acc pasi kane interesrate te ndryshem
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    // .map(deposit => (deposit * 1.2) / 100)
    .map(deposit => (deposit * acc.interestRate) / 100) //dhe ketu vendosim interestRate per secilin

    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};
// calcDisplaySummay(account1.movements);
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
  // //Display movements
  displayMovements(acc.movements);
  // //Display balance
  calcDisplayBalance(acc);
  // //Display summary
  calcDisplaySummay(acc);
};

///EVENT HANDLER
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //i jep nje event parameter te quajtur event
  //Prevent from submitting
  e.preventDefault(); //e anullon ngjarjen nese eshte e anullueshme, pra veprimi i paracaktuar që i përket ngjarjes nuk do të ndodhë.
  // console.log('LOGIN'); //sa here klikon te shigjeta e loginit te rritet nr ne console

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // currentAccount && currentAccount.pin do jete e njejte me currentAccount?.pin  (optional chaining)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; //pasi logohesh qendron mausei te fusha e pin
    inputLoginPin.blur(); //ben te mundur heqjen e mausit te pin pas logimit

    // //Update UI
    updateUI(currentAccount);
  }
});

//TRANSFER MONEY
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
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
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
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2)); //output: ['c', 'd', 'e']
console.log(arr.slice(2, 4)); //output: ['c', 'd']
console.log(arr.slice(-2)); //output: ['d', 'e']
console.log(arr.slice(-1)); //output: ['e']
console.log(arr.slice(0)); //output: ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice()); //output: ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(-4)); //output: ['b', 'c', 'd', 'e']
console.log(arr.slice(-5)); //output: ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(-3)); //output: ['c', 'd', 'e']
console.log(arr.slice(1, -2)); //output:['b', 'c']
console.log([...arr]); //output: ['a', 'b', 'c', 'd', 'e'] spread operator

//SPLICE
// console.log(arr.splice(2)); //output: ['c', 'd', 'e']

// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

arr.splice(-1);
console.log(arr); // a, b, c, d
arr.splice(1, 2);
console.log(arr); //output: a, d

//REVERSE
let arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //output:['f', 'g', 'h', 'i', 'j']
console.log(arr2); //output:['f', 'g', 'h', 'i', 'j']

//CONCAT
const letters = arr1.concat(arr2);
console.log(letters); //output:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr1, ...arr2]); //output:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//JOIN
console.log(letters.join(' - ')); //output: a - b - c - d - e - f - g - h - i - j
*/

/*
///The new at Method

const arr = [23, 10, 12];
console.log(arr[0]); //output: 23
console.log(arr.at(0)); //output: 23 , pra jep te njejten vlere por e emertuar ne forme tjeter

//getting last array element
console.log(arr[arr.length - 1]); //output: 12, pra kerkon arr me pozicion arr.length -1 , qe do te thote arr.length = 3, 3-1= 2, pro poz 2 eshte 12
console.log(arr.slice(-1)); //output: [12]
console.log(arr.slice(-1)[0]); //output: 12
console.log(arr.slice(-2)[0]); //output: [10, 12] eshte kur e kemi (-2) por kur vendosim dhe indeksin[0] atehere do marri mes [10, 12] ku indezi o eshte vlera 10, pra outputi eshte 10
console.log(arr.at(-1)); //output: 12
console.log(arr.at(-2)); //output: 10 (pasi fillon nga nr -1 pasi 0 nuk eshte negative)

//at method works and for strings
console.log('genta'.at(0)); //output: g
console.log('genta'.at(3)); //output: t
console.log('genta'.at(-2)); //output: t
console.log('genta'.slice(2)[0]); //output: n
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement} Euro`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)} Euro`); //Math.abs ben te mundur qe vleren negative ta ktheje ne pozitive
//   }
// }

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} Euro`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} Euro`); //Math.abs ben te mundur qe vleren negative ta ktheje ne pozitive
  }
}

console.log('---FOREACH---');
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement} Euro`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)} Euro`); //Math.abs ben te mundur qe vleren negative ta ktheje ne pozitive
//   }
// });

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov} Euro`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)} Euro`); //Math.abs ben te mundur qe vleren negative ta ktheje ne pozitive
  }
});

*/
/*
//forEach with Maps and Sets
//Map
const currencies = new Map([
  ['USD', 'United States dollar'], //KEY: USD dhe VALUE: United States dollar
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//do therrasim forEach ne nje map
//first parameter eshte current element of array; second is the index; third is entire array (e gjithe array)
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']); //remove dublikimet
console.log(currenciesUnique); //Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//////////////////////////////////  PROJECT: BANKIST APP  ////////////////////////////////////////////////

// Coding Challenge #1
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀*/

console.log('----PIKA 1----');

const checkDogs = function (dogsJulia, dogsKate) {
  console.log(`Julia's data: ${dogsJulia}, Kate's data: ${dogsKate}`);
  // console.log(`${dogsJulia.slice(1, 3)}`);
  console.log(dogsJulia.slice(1, -2));

  console.log('----PIKA 2----');

  const newDogsJulia = dogsJulia.slice(1, 3);
  // console.log(newDogsJulia, dogsKate);
  // const finalDogs = console.log(newDogsJulia, dogsKate); //array me dogs e update

  const finalDogs = newDogsJulia.concat(dogsKate); //array me dogs e update
  //ose
  // const finalDogs = [...newDogsJulia, ...dogsKate];
  console.log(finalDogs);
  console.log('----PIKA 3----');
  /// CIKLI FOR
  // for (const [i, fin] of finalDogs.entries()) {
  //   if (fin > 5) {
  //     console.log(`Dog number ${i + 1} is an adult, and is ${fin} years old`);
  //   } else {
  //     console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  //   }
  // }

  /// CIKLI FOREACH
  finalDogs.forEach(function (fin, i) {
    if (fin > 5) {
      console.log(`Dog number ${i + 1} is an adult, and is ${fin} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

////////////////////////// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE //////////////////////////
///// MAP
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//vlerat jane ne euro € dhe do i konvertojme ne dollar $ ku 1€ = 1.1$
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
  //nese e bejme return 23; atehere do kishim te outputi i movementsUSD (8) [23, 23, 23, 23, 23, 23, 23, 23]
});
console.log(movements); //output: (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD); //output: (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//MENYRA E DYTE
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor); //output: (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

//MENYRA E TRETE(ta kthejme ne arrow function)

const movementsUSDarr = mov => console.log(movementsUSD);
movementsUSDarr();

const movementsUSDArr = movements.map(
  (mov, i) =>
    `Deposit ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsUSDArr);
//output:(8) ['Deposit 1: You deposited 200', 'Deposit 2: You deposited 450', 'Deposit 3: You withdrew 400', 'Deposit 4: You deposited 3000',
// 'Deposit 5: You withdrew 650', 'Deposit 6: You withdrew 130', 'Deposit 7: You deposited 70', 'Deposit 8: You deposited 1300']
*/
/*
////EXAMPLE
const user = 'Steven Thomas Williams'; //stw
const username = user.toLowerCase().split(' ');
console.log(username); //output: (3) ['steven', 'thomas', 'williams']

//si te nxjerrim si perfundim qe na nevojiten vetem shkronjat e para per user pra stw
const username1 = user
  .toLowerCase()
  .split(' ')
  // .map(function (name) {
  //   return name[0];
  // })
  // .join('');
  .map(name => name[0])
  .join('');
console.log(username1); //output: (3) ['s', 't', 'w'] dhe nese e bejme .join('') do dali output: stw

const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
};
console.log(createUsername('Genta Hoxha')); //output: gh

/*
///EXAMPLE
const account6 = {
  owner: 'Williams Steven Thomas ',
  movements: [200, -200, -460],
  interestRate: 0.7,
  pin: 6666,
};

const account7 = {
  owner: 'Steven Williams  Thomas ',
  movements: [200, -200, -460],
  interestRate: 0.7,
  pin: 7777,
};
const accountss = [account6, account7];

const createUsers = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsers(accountss);
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits); //output: vlerat me te medha se 0, pra: (5) [200, 450, 3000, 70, 1300]

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //output: vlerat me te medha se 0, pra: (5) [200, 450, 3000, 70, 1300]

//cikli for
const withdrawals = [];
for (const mov of movements) if (mov < 0) withdrawals.push(mov);
console.log(withdrawals);

//me filter
const withdraw = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdraw);

//tani do e bejme me arraw
const withdra = mov => mov < 0;
console.log(withdraw);
withdra();

//REDUCE METHOD
console.log(movements);
//accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  //the first parameter is always the current element of array, te e dyta eshte index, i dhe te e treta kemi array
  console.log(`Iteration ${i}: ${acc}`);
  // //output:Iteration 0: 0
  // script.js:403 Iteration 1: 200
  // script.js:403 Iteration 2: 650
  // script.js:403 Iteration 3: 250
  // script.js:403 Iteration 4: 3250
  // script.js:403 Iteration 5: 2600
  // script.js:403 Iteration 6: 2470
  // script.js:403 Iteration 7: 2540
  return acc + cur;
}, 0); //reduce ka dhe second parameer i cili eshte 0 e cila eshte initial value (vlera fillestare)of accumulator in the first loop iteration
console.log(balance); //output: 3840

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//OR
const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3); //output: 3840

//maximum  value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

*/

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to
human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
/*
console.log('----PIKA 1 ----');
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)); //dogAge = age
  const adult = humanAge.filter(age => age >= 18);
  const min = humanAge.filter(age => age < 18);
  console.log(humanAge);
  console.log(adult);
  console.log('----PIKA 2 ----');
  console.log(min);
};
//calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //rasti i pare i te dhenave
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); //rasti i dyte i te dhenave
console.log('----PIKA 3 ----');
// const adult1 = [36, 32, 76, 48, 28]; //rasti i pare i te dhenave
const adult1 = [80, 40, 56, 36, 40, 32]; //rasti i dyte i te dhenave
const calcAverageHum = adult1.reduce(function (ad, cur) {
  // console.log(`${ad}`);
  return ad + cur;
}, 0);
console.log(calcAverageHum / adult1.length);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
console.log(movements);
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
console.log('----PIKA 1 ----');
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)); //dogAge = age
  const adult = humanAge.filter(age => age >= 18);
  const min = humanAge.filter(age => age < 18);
  console.log(humanAge);
  console.log(adult);
  console.log('----PIKA 2 ----');
  console.log(min);
};
//calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //rasti i pare i te dhenave
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); //rasti i dyte i te dhenave
console.log('----PIKA 3 ----');
// const adult1 = [36, 32, 76, 48, 28]; //rasti i pare i te dhenave
const adult1 = [80, 40, 56, 36, 40, 32]; //rasti i dyte i te dhenave
const calcAverageHum = adult1.reduce(function (ad, cur) {
  // console.log(`${ad}`);
  return ad + cur;
}, 0);
console.log(calcAverageHum / adult1.length);
*/

//ARRAY FUNCTION
// const ages = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = ages.map((age, i) =>
//   age <= 2 ? 2 * age : 16 + age * 4
// );
// console.log(calcAverageHumanAge);
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/////THE FIND METHOD
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/
/*
////SOME AND EVERY
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

//EQUALITY
console.log(movements.includes(-130)); //output: true

//SOME: CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0); //some eshte e barabarte me any
console.log(anyDeposits);

//EVERY CONDITION
console.log(movements.every(mov => mov > 0));
console.log(accounts4.movements.every(mov => mov > 0));

//SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

*/
////FLAT AND FLATMAP
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //outp[ut: (8) [1, 2, 3, 4, 5, 6, 7, 8]]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, [4, [5, 6]]];
console.log(arrDeep.flat()); //output; (6) [Array(2) ([1, 2]), 3, 4, Array(2) ([5, 6]), 7, 8]

console.log(arrDeep.flat(2)); //output: (8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); //output: 17840 pra shuma totale e 4 accounteve

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); //output: 17840 pra shuma totale e 4 accounteve

//SOME: CONDITION
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.some(mov => mov === -130)); //output: true
const anyDeposits = movements.some(mov => mov > 0); //some eshte e barabarte me any
console.log(anyDeposits); //output: true

//EVERY CONDITION
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//FLAT METHOD
const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr1.flat()); //output: (5) [0, 1, 2, 3, 4]
console.log(arr2.flat(2)); //output: (5) [0, 1, 2, 3, Array(2)]
console.log(arr2.flat(3)); //output: (6) [0, 1, 2, 3, 4, 5]

//FLATMAP METHOD
const arr3 = [1, 2, 1];
const result = arr3.flatMap(num => (num === 2 ? [2, 2] : 1));
console.log(result);

//SORTING ARRAYS
//STINGS
const owners = ['Jonas', 'Zach', 'Fito', 'Nis'];
console.log(owners.sort()); //output: (4) ['Fito', 'Jonas', 'Nis', 'Zach'] //pra i rendit ne rend alfabetik
console.log(owners); //output: (4) ['Fito', 'Jonas', 'Nis', 'Zach']

//NUMBERS
const movement = [200, 450, -400, 3000, -650, -130, -132, -100, -70, 70, 1300];
console.log(movement); // output: (11) [200, 450, -400, 3000, -650, -130, -132, -100, -70, 70, 1300]
console.log(movement.sort()); //output: (11) [-100, -130, -132, -400, -650, -70, 1300, 200, 3000, 450, 70]  // ne rend numerik , numrat negativ si fillim pasi e merr- si string

//Si ti rregullojme sort e numrave
//return < 0, A, B(keep order)
//return > 0, B, A(switch order)
//Ascending
//Menyra 1:
movement.sort((a, b) => {
  if (a > b) return 1;
  // if (b > a) return -1; //e njejta gje
  if (a < b) return -1;
});
console.log(movement); //output: (11) [-650, -400, -132, -130, -100, -70, 70, 200, 450, 1300, 3000] (Nga nr me i vogel tek me i madhi)
//Menyra 2:
movement.sort((a, b) => a - b);
console.log(movement); //output: (11) [-650, -400, -132, -130, -100, -70, 70, 200, 450, 1300, 3000] (Nga nr me i vogel tek me i madhi)

//Descending
//Menyra 1:
movement.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movement); //output: (11) [3000, 1300, 450, 200, 70, -70, -100, -130, -132, -400, -650](Nga nr me i madh tek me i vogli)
//Menyra 2:
movement.sort((a, b) => b - a);
console.log(movement); //output: (11) [3000, 1300, 450, 200, 70, -70, -100, -130, -132, -400, -650](Nga nr me i madh tek me i vogli)
*/
/*
console.log([1, 2, 3, 4, 5, 6, 7]); //output: (7) [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //output: (7) [1, 2, 3, 4, 5, 6, 7]

const x = new Array(7);
console.log(x); //output: (7) [empty × 7]

x.fill(1, 3, 5);
console.log(x); //output:(7) [empty × 3, 1, 1, empty × 2]

x.fill(1, 3, 5);
x.fill(1);
console.log(x); //output:(7) [1, 1, 1, 1, 1, 1, 1]

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //output: (7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); //output: (7) [1, 2, 3, 4, 5, 6, 7]

const movementsUI = Array.from(document.querySelector('.movements__value'));
console.log(movementsUI);
*/
/*

////////// Example 1 /////////

const bankDepositSum = accounts
  .flatMap(acc => acc.movements) //(29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
  .filter(mov => mov > 0) //(17) [200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]
  .reduce((sum, cur) => sum + cur, 0); //25180
console.log(bankDepositSum);

//  ne example 1 kemi  metoden map dhe flat te dyja bashke cka ben te mundur krijimin e nje array te re me te gjitha te dhenat e 4 accounbteve qe kishim ne kete rast

//////////// Example 2 ////////////////
const bankDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(accounts.flatMap(acc => acc.movements)); //output: (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
console.log(bankDeposit1000); //output: 6

let a = 10;
console.log(a); //output: 10
console.log(a++); //output: 10
console.log(++a); //output: 11
console.log(a); //output: 11

//////////// Example 3 ////////////////
//Rasti 1
// const sums = accounts
//Rasti 2
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //Rasti 1
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      //Rasti 2
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
//Rasti 1
// console.log(sums); //output: {deposits: 25180, withdrawals: -7340}
//Rasti 2
console.log(deposits, withdrawals); //output:25180 -7340
*/
///////EXAMPLE 4///////
//this is a nice title => This Is a Nice Title
// const convert = console.log('this is a nice title');
// const convert = 'this is a nice title';
/*
const convertTitle = function (convert) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);


  const exceptions = ['a', 'an', 'and', 'the'];
  const convert1 = convert
    .toLowerCase()
    .split(' ')
    .map(name => (exceptions.includes(name) ? name : capitzalize(name)))
    .join(' ');

  return capitzalize(convert1);
};
console.log(convertTitle('this is a nice title'));
*/
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const dog1 = [{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }];

console.log('----Pika 1----');
console.log(dogs);
dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight * 0.75 * 28)));

console.log('----Pika 2----');
// const ownersDog = dogs.map((dog, i) => dog.owners);
// console.log(ownersDog);
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Dog of Sarah is eating ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'too little'
  }`
);
console.log('----Pika 3----');
const ownersEatTooMuch = dogs
  .filter(dogs => dogs.curFood > dogs.recommendedFood)
  .flatMap(dogs => dogs.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dogs => dogs.curFood < dogs.recommendedFood)
  .flatMap(dogs => dogs.owners)
  .flat();
console.log(ownersEatTooLittle);

console.log('----Pika 4----');
console.log(
  `${ownersEatTooMuch[0]} and ${ownersEatTooMuch[1]} and ${ownersEatTooMuch[2]}'s dogs eat too much!`
);
// console.log(`${ownersEatTooMuch.join(' and')}'s dogs eat too much!`);
console.log(
  `${ownersEatTooLittle[0]} and ${ownersEatTooLittle[1]} and ${ownersEatTooLittle[2]}'s dogs eat too little!`
);

console.log('----Pika 5----'); //me metoden find
const exactly = dogs.some(dogs => (dogs.curFood = dogs.recommendedFood));
console.log(exactly);

console.log('----Pika 6----'); // metoda some, pra nese ka ndonje qen qe ha ne norme
const okay = dogs.some(dogs => (dogs.curFood = dogs.recommendedFood));
console.log(okay);

console.log('----Pika 7----');
const okayArr = dogs.find(dogs => (dogs.curFood = dogs.recommendedFood));
console.log(okayArr);

console.log('----Pika 8----');
const dogsSort = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
const a = dogsSort.curFood;
const b = dogsSort.recommendedFood;
const dogsSorted = dogsSort.sort((a, b) => a - b);
console.log(dogsSorted);
