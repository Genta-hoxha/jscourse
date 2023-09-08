 /*'use strict';  // 1. na ndalon te bejme disa gjera dhe  2.krijon errore vizive per ne ne disa situata

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const private = 534;
*/

/* ------------------------------------ FUNCTION --------------------------------------------*/
/*
function logger(){
    console.log('My name is Genta');
}

//calling /running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) { //pra emertojme emrin e funksionit dhe i vendosim 2 parametra
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;  //pra kthejme cdo vlere te funksionit
  }
  
  //kemi call/runn/invok function
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
*/
/*
//Function declaration
const age1 = calcAge1(1996);

function calcAge1(birthYeah) {
    return 2023 - birthYeah;
}


//Function expression
const calcAge2 = function (birthYeah) {
    return 2023 - birthYeah;
}
const age2 = calcAge2(1996);
console.log(age1, age2);

//Arrow function
const calcAge3 = birthYeah => 2023 - birthYeah;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); 
  console.log(yearsUntilRetirement(1980, 'Bob'));
  */
/*
  function cutFruitPieces(fruit) {  //funksion qe do ktheje frutin e ndare ne pjese
    return fruit * 4;
  }


  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    //const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //kjo do tregoje se sa apple dhe orange do behet juice pra me vlerat (2, 3)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`; //kjo do tregoje ne sa pjese do ndahet nje apple ose orange duke i shumezuar vlerat me * 4
    return juice;
  }
  console.log(fruitProcessor(2, 3));

  */

  /*
  const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
  }


  const bills = [125, 555, 44];
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  console.log(bills, tips, totals);

  */

  /*
  const genta = {
    firstName: 'Genta',
    lastName: 'Hoxha',
    age: 2023 - 1996,
    job: 'Programmer',
    friends: ['Ana', 'Meri']
  };
  console.log(genta);

  //nese duam te shikojme vetem nje property te objektit na vjen ne ndihme DOT
  console.log(genta.firstName); 

  console.log(genta.job);//nese duam te shikojme vetem nje property te objektit na vjen ne ndihme DOT
  console.log(genta['job']); //nese duam te shikojme vetem nje property te objektit na vjen ne ndihme BRACKET NOTATION - ketu mund te vendosim cdo expression qe ne pelqejme


  const nameKey = 'Name';
  console.log(genta['first' + nameKey]);
  console.log(genta['last' + nameKey]);
**/

  //Example Dallimi mes Dot dhe Bracket Notation
/*
  const genta = {
    firstName: 'Genta',
    lastName: 'Hoxha',
    age: 2023 - 1996,
    job: 'Programmer',
    friends: ['Ana', 'Meri']
  };
  console.log(genta);

  const interested = prompt('What do you know about Genta? Choose between firstNmae, lastName, age, job and friends.');
    // console.log(interested); //nese e bejme kshu do dali ne konosole property job psh por jo se cfare job
    // console.log(genta.interested); //nese e bejme kshu outputi do dali undefined sepse ne kemi provuar tre aksesojme nje property ne nje objekt qe nuk ekziston
    console.log(genta[interested]); //pra me kete eshte correct result

    //tani nese vendosim te dime per dicka tjeter rreth gentes, psh per location rezultati do jete serish undefined . WHY?? Arsyeja eshte se nuk kemi nje property te quajtur location ne objekt
    //bejme nje kusht qe i tregojme perdoruesit qe duhet te zgjedhesh mes 5 property qe i kemi listuar
    if(genta[interested]) {
      console.log(genta[interested]);
    }
    else {
      console.log('Wrong request. Please Choose between firstNmae, lastName, age, job and friends.');
    }

    //si te shtojme new property ne nje objekt
    genta.location = 'Albania';
    genta['telegram'] = '@genta';
    console.log(genta);

*/
/*const jonas = {
  firstName: 'Jonas',
  lastName: 'Hoxha',
  birthYear: 1996,
  job: 'Programmer',
  friends: ['Michael', 'Meri', 'Joni'],
  hasDriverLicense: true,

 /* calcAge: function(){
   //console.log(this); //afishon te gjithe metoden me te gjitha property
    return 2023 - this.birthYear;
  }
*/
/*
  calcAge: function(){
  this.age = 2023 - this.birthYear;
     return this.age;
   }
};
//console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
*/

/*
////USHTRIM Gjenerimi i fjalise "Jonas is a 46 - years old teacher and he a driver's license"

const jonas = {
  firstName: 'Jonas',
  lastName: 'Hoxha',
  firstJob: 1977, 
  hasDriverLicense: true,

  calcYear: function(){
    //console.log(this);
    return 2023 - this.firstJob;
  }

}; 
 /*
  hasDriverLicense = true;
  if (hasDriverLicense = true) {
  console.log("has a driver's license")
 }
*/

/*console.log(`${jonas.firstName} is a ${jonas.calcYear()} - years old teacher and he ${jonas.hasDriverLicense ? 'a' : 'no'} driver's license`);

 
let hasDriversLicense = true;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("has a driver's license");
*/


/*
const mark = {
  fullName: 'Mark Miller',
  mass1: 78,
  height1: 1.69,

  calcBmiMark: function() {
    return this.mass1 / this.height1 * this.height1;
    }
};

const john = {
  fullName: 'John Smith',
  mass2: 92,
  height2: 1.95,

  calcBmiJohn: function() {
    return this.mass2 / this.height2 * this.height2;
    }
};

const calcBmiMark = 78;
const calcBmiJohn = 92;
if(calcBmiMark > calcBmiJohn) {
  console.log(`Mark Miller BMI ${mark.calcBmiMark()} is higher than John Smith ${john.calcBmiJohn()}!`);
}
else if (calcBmiMark < calcBmiJohn) {
  console.log(`John Smith BMI ${john.calcBmiJohn()} is higher than Mark Miller ${mark.calcBmiMark()}!`);
}
//console.log(`${mark.calcBmiMark()}, ${john.calcBmiJohn()}`);

*/


/*-----------------------------------------------THE FOR LOOP----------------------------------------------*/
/*
//Example1
for(let rep = 1; rep <= 10; rep++) {
  console.log('Genta');
}

//Example2
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Genta ${rep}`);
}
*/

/*
const gentaArray = [
  'Genta',
  'Hoxha',
  2023 - 1996,
  'programmer',
  ['Ana', 'Jona', 'Mira'],
  true
];

const types = [];
// console.log(genta[0])
// console.log(genta[1])
// console.log(genta[2])
// console.log(genta[3])
// console.log(genta[4])


for(let i = 0; i < gentaArray.length; i++) {
  console.log(gentaArray[i], typeof gentaArray[i]);

  //types[i] = typeof gentaArray[i];  // na tregon se cfare tipesh kane elementet ne liste

types.push(typeof gentaArray[i]);

}
console.log(types);

const years = [1991, 2003, 1996, 2001, 1950];
const age = [];


for (let i = 0; i < years.length; i++) {
  age.push(2023 - years[i]);
}
console.log(age);


console.log('----ONLY STRINGS---------')
for (let i = 0; i < gentaArray.length; i++) {
  if (typeof gentaArray[i] !== 'string') continue;
  console.log(gentaArray[i], typeof gentaArray[i]);
}

console.log('----BREAK WITH NUMBER---------')
for (let i = 0; i < gentaArray.length; i++) {
  if (typeof gentaArray[i] === 'number') break;
  console.log(gentaArray[i], typeof gentaArray[i]);
}
*/

/*
// looping backwards and loops in loops
const genta = [
  'Genta',
  'Hoxha',
  2023 - 1996,
  'programmer',
  ['Ana', 'Jona', 'Mira'],
];

//do e nisim nga e fundit ne fillim pra nga 4,3 ...0

for(let i = genta.length - 1; i >= 0; i--) {
  console.log(i, genta[i])
}


//loops inside of loops
 
for(let exercise = 1; exercise < 4; exercise++){
  console.log(`-------------------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);

    for (let routin = 1; routin <= 3; routin++){
      console.log(`Lista e ${routin}`);
    }
  }
}

*/

/*
//cikli for
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Hello world ${rep}!`);
}

//cikli while
let rep = 1;
  while (rep <= 10) {
    console.log(`Cikli while: Hello World ${rep}!`);
    rep++;
  }

*/

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6 ) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

*/



/*-----------------------------------------------CHALLENGE-----------------------------------------------------
---------CHALLENGE 1*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3]), calcTip(bills[4]), calcTip(bills[5]), calcTip(bills[6]), calcTip(bills[7]), calcTip(bills[8]), calcTip(bills[9])];
//const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], bills[3] + tips[3], bills[4] + tips[4], bills[5] + tips[5], bills[6] + tips[6], bills[7] + tips[7], bills[8] + tips[8], bills[9] + tips[9]]; //bill+tip
const tips = []; //shtojme nje array me vlere boshe , pai do vendosim vlerat qe do gjenerohen 
const totals = []; //shtojme nje array me vlere boshe , pai do vendosim vlerat qe do gjenerohen

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); //shtojme nje konstante ku do behet kalkulimi i vlerave , e vendosim "tip" , dhe behet kalkulimi i calcTip me bills[i]
  tips.push(tip); //ne kete rast bejme mbushjen e array te const "tip" duke bere 
  totals.push(tip + bills[i]);                                                                                   
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
   return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));   
console.log(calcAverage([totals]));     
console.log(calcAverage([tips]));                                                                                                        