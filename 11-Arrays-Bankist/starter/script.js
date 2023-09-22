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

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; //merr te dhenat e htm dhe ben zevendesimin e elementit me insertAdjacentHTML()
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div> 
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); //insertAdjacentHTML analizon nje tezt te html dhe me pasfut rezultatin ne nje pozicion  te caktuar, ne kete rast e donim ne poz.afterbegin
  });
};
displayMovements(account1.movements);

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
/*
console.log('----PIKA 1----');

const checkDogs = function (dogsJulia, dogsKate) {
  console.log(`Julia's data: ${dogsJulia}, Kate's data: ${dogsKate}`);
  // console.log(`${dogsJulia.slice(1, 3)}`);
  dogsJulia.slice(1, 3);

  console.log('----PIKA 2----');

  const newDogsJulia = dogsJulia.slice(1, 3);
  // console.log(newDogsJulia, dogsKate);
  // const finalDogs = console.log(newDogsJulia, dogsKate); //array me dogs e update

  const finalDogs = newDogsJulia.concat(dogsKate); //array me dogs e update
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

*/
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
