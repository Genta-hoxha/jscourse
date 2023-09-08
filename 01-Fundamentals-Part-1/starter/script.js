/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

40 + 8 + 23 -10; 
console.log(40 + 8 + 23 - 10);
console.log('Genta');

let firstName = "Genta";
console.log(firstName);

let genta_mati = "GM";
console.log(genta_mati);

let PI = 3.1415;

// Metoda me e mire dhe me efikase dhe me e lehte per tu kuptuar eshte kjo metoda e pare
// Metoda 1
let myFirstJob = 'Economic';
let myCurrentJob = 'Programmer';


//Metoda 2 ne kete metode ne kemi dy pune te ndryshme por qe nuk tregon aktualen dhe te meperparshmen
let job1 = 'economic';
let job2 = 'programmer';

console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Genta');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//Rasti kur kemi nje variabel empty dhe si output ne do kemi undefined
let year;
console.log(year);
console.log(typeof year);

//Rasti kur nje variabli i japim nje vlere dhe ne kete rast kemi number
year = 1996;
console.log(typeof year);

//Ne kete rast kemi rastin e bug, ku js tregon qe vlera null eshte nje object qe nuk ben sense
console.log(typeof null);

*/

/*
//Rasti i LET
let age = 30;
age = 31;
console.log(age);  //Output: 31


//Rasti i CONST
const birthYear = 1996;
console.log(birthYear); //Output: 1996

/* //Rasti i CONST
const birthYear = 1996;
birthYear = 1990;
console.log(birthYear); //Output: kemi Type Error , pasi duhet nje vlere e pandryshuar e variablit, si psh data e lindjes

//Rasti i VAR
var job = 'economic';
job = 'programmer'


lastName = 'Hoxha';
console.log(lastName);

*/

/*
// Basic Operation
//Operation 1
const now = 2023 ;
const ageGenta = now - 1996;
const ageAna = now -1998;
console.log(ageGenta, ageAna);

//Operation 2
console.log(ageGenta * 2, ageAna / 2);

//Operation 3
const firstName = 'Genta';
const lastName = 'Hoxha';
console.log(firstName + ' ' + lastName);

//Operation 4 assigment operation
let x = 10 + 5;
x += 10;  // x = x + 10
x *= 4;
x++; // x = x+1
console.log(x);

//Operation 5 comparison operators
console.log(ageGenta > ageAna);  // >, <, >=, <=
console.log(ageAna >=45);

*/

/*
//OPERATOR PRECEDENCE
const now = 2023 ;
const ageGenta = now - 1996;
const ageAna = now -1998;

console.log(now - 1996 > now - 1998);
console.log(25-10-5);


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const massMark = 78;
const heighMark = 1.69;

  const massJohn = 92;
  const heighJohn = 1.95;

  const BMIMark = massMark / heighMark * heighMark;
  const BMIJohn = massJohn / heighJohn * heighJohn;
  const markHigherBMI = BMIMark > BMIJohn;

  console.log(BMIMark, BMIJohn, markHigherBMI);

  */

  /*
  const firstName = 'Genta';
  const year = 27;
  const genta = "une jam" + ' ' + firstName + ' ' + 'dhe jam' + year;
  console.log(genta);

 */

  // if / else statement
  //Shembulli 1
/*
  const age = 25;
  const isOldEnough = age >= 26;

  if(isOldEnough) {
    console.log('Genta mund te ngase makinen ');
  }
  else {
    console.log('Genta nuk i jep makines');  } */

  //Shembulli 2
  /* const age = 15;

  if(age >= 18) {
    console.log('You can start driving license');
  }
  else {
    const yearsLeft = 18 - age;
    console.log('You are too young. Wait another' +' ' +  yearsLeft + 'years' );
  } 
*/

//Shembulli 3
//https://github.com/Genta-hoxha/jscourse/commit/5553201416755aa6fba9ec193ea9d26d372b354e
//https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648177#overview


/* ------------------------------------TYPE CONVERSION AND COERCION ------------------------------------------------

//Type conversation
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); 
console.log(Number('Genta'));  // si output do kemi NaN pra do te thote not a number
console.log(typeof NaN); // ne kete rast si output do kemi just number, pra serish invalid number
console.log(String(23), 23); // outputi do jete  23(si string) 23 (si numer)

// Type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '3' - 3); // ne kete rast si output do kemi 17 pasi automatikisht js e converton stringun ne number 
console.log('23' + '3' - 3); // ne kete rast outputi do jete 230 sepse nese do kene shenjen + i bie qe js do e marri si string, ashtu sic eshte (pra nuk e konverton) 233 dhe me pas nr 3 e merr si numer dhe behet zbritja
console.log('23' + '3' + 3); // ne kete rast outputi do jete 2333 pra e gjitha string 

//Example
let n = '1' + 1;  // outputi eshte 11
n = n - 1;   // 11-1= 10 
console.log(n);

*/

/*--------------------------------------------- TRUTHY AND FALSY VALUES ------------------------------------------------------------
//5 falsy values: 0, '',undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean('')); //empty string nxjerr si output false
console.log(Boolean(undefined));
console.log(Boolean('Genta')); // string not empty na jep true (truthy value)
console.log(Boolean({})); // jep ne fund true sepse kemi nje objekt

// Example 1
const money = 0;//Outputi ne kete rast do jete "You should get a job" sepse ne fillim kemi nje vlere 0 dhe me kete vlere ne kthejme nje vlere false qe i bie qe kushti i pare bie poshte dhe automatikisht kalojme te kushti 2

if (money){
  console.log("Don't spend it all!");
}
else {
  console.log('You should get a job!');
}
 
// Example 2
let height;// Outputi ne kete rast eshte 'Height is undefined' sepse nuk i kemi dhene nje vlere variablit height, pra eshte undefined cka tregon qe eshte false dhe kalojme te kushti 2

if (height){
  console.log("Height is defined");
}
else {
  console.log('Height is undefined');
} 

*/


/*--------------------------------------------- EQUALITY OPERATORS == VS.===  ------------------------------------------------------------*/ 
/*//Example 1

const age = 18;
if (age === 18) console.log("You are an adult (strict)"); //ne kete rast kemi rastin e nje vlere fikse , strict dhe kthen true ose false
if (age == 18) console.log("You are an adult(loose)"); //ne kete rast kemi rastion kur nje string mund te klonvertohet dhe ne numer

//Example 2

const age = '18';
if (age === 18) console.log("You are an adult (strict)"); //ne kete rast kemi nje string dhe outputi do jete You are an adult(loose)
if (age == 18) console.log("You are an adult(loose)"); //ne kete rast kemi rastion kur nje string mund te klonvertohet dhe ne numer, pra outputi do jete You are an adult(loose)

//Example 3

const age = '18';
if (age === 18) console.log("You are an adult (strict)"); 
if (age == 18) console.log("You are an adult(loose)"); 

const favorite = prompt("What's your favorite number?");
console.log(favorite);

if (favorite == 23) {  // ne kete rast '23' == 23 
  console.log("cool 23 is an amazing number!");
}


const favorite = Number(prompt("What's your favorite number?")); //pasi e kemi cilesuar si numer , pra e kemi strict
console.log(favorite);

if (favorite === 23) {  // ne kete rast 23 === 23 
  console.log("cool 23 is an amazing number!");
}
*/



/*--------------------------------------------- BOOLEAN LOGIC  ------------------------------------------------------------*/ 
/*
1. AND  
TRUE AND TRUE = TRUE
TRUE AND FALSE = FALSE
FALSE AND TRUE = FALSE
FALSE AND FALSE = FALSE

2. OR
TRUE OR TRUE = TRUE
TRUE OR FALSE = TRUE
FALSE OR TRUE = TRUE
FALSE OR FALSE = FALSE

3. ! INVERT
!TRUE = FALSE
!FALSE = TRUE 
*/

/*--------------------------------------------- LOGICAL OPERATORS  ------------------------------------------------------------*/ 
/*
1. AND = &&
2. OR = ||
3. INVERT = !
*/



/* Write your code below. Good luck! 🙂 

const scoreDolphins = (96 + 108 + 89) / 3;
    const scoreKoalas = (88 + 91 + 110) / 3;
    console.log(scoreDolphins, scoreKoalas); //OUTPUTI: 97.6  96.3

    if(scoreDolphins > scoreKoalas) {
        console.log('Dolphins win the trophy 🏆'); //OUTPUT: Dolphins win the trophy 🏆
    }else if (scoreKoalas > scoreDolphins){
        console.log('Koalas win the trophy 🏆');
    }else if(scoreDolphins === scoreKoalas ){
        console.log('Both win the trophy!');
    }
    

*/

/*--------------------------------------------- THE SWITCH STATEMENT  ------------------------------------------------------------*/ 

// break; // ben te mundur te nderpresim kushtin
/*
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Genta';
console.log('I am ${2023 - 1996} years old ${me}')
*/


/*--------------------------------------------- THE CONDITIONAL OPERATOR  ------------------------------------------------------------*/ 
// Example 1
/* const age = 19;
age >= 20 ? console.log("I like to drink wine"):
console.log("I like to drink water") */

/*
// Example 2
const age = 23;
const drink = age >= 18 ? 'wine': 'water';
console.log(drink);

*/

/* EXAMPLE

const bill = 275;
 //41.25
// Write your code below. Good luck! 🙂 


const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2; //ne kete rast kemi TRUE && TRUE dhe do vleje billi 1 pra 41.25
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); //The bill was 275,the tip was 41.25 , and the total value 316.25

*/