'use strict'; /*
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  //do krijojme nje method ku si parametra do kemi index e startmenu dhe nje index te main menu
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
  // tani bejme destructuing od orderDelivery
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // pra vendos te gjitha property of orderDelivery
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered  to ${address} at ${time}`
    );
  },
*/ /*
/*
  // ose e bejme
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered  to ${address} at ${time}`
    );
  },

  // orderDelivery: function (obj) {
  //   //call argument obj
  //   console.log(obj);
  // },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
//////////////////////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); //Outputi: Italian, Vegetarian

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary); //Outputi: Vegetarian, Italian
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Outputi: Garlic Bread Pizza
//console.log(restaurant.order(2, 0));

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); //output: 2, [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); //output: 2, 5, 6

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r); //output: 8, 9, undefined

/*
 
};
*/ /*
/*
// join 2 arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrNew = [...arr1, ...arr2];
console.log(arrNew);

//Iterables:  arrays, strings, maps, sets. NOT objects
const str = 'Genta';
const letters = [...str, ' ', 'H.'];
console.log(letters); // ben te mundur ndarjen e emrit me germa . pra outputi: ['G', 'e', 'n', 't', 'a', ' ', 'H.']
console.log(...str);

//  the spread operators
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //outputi: [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); //outputi: [1, 2, 7, 8, 9]

const newArr2 = [1, 2, arr];
console.log(newArr2); //outputi: [1, 2, Array(3)]

console.log(...newArr); //outputi: 1 2 7 8 9

//tani e bejme me rastin konkret te porositjes se pizza

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //outputi: ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

///join 2 arrays
const menuJoin = [...mainMenuCopy, ...newMenu];
console.log(menuJoin); //output: ['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto', 'Gnocci']

//Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//Spread operator vs. Rest Pattern (...)
//Diferenca eshte se spread ben te mundur unpack nje array ndersa rest pack element into an array
/*
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST ,  because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //output: 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //outputi: Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //output: {thu: {…}, fri: {…}} (pra pa diten saturday )

//Functions per SPREAD
/*
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
*/
//Functions per REST
/*
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [2, 5, 7];
add(...x); //output: 14
//now lets order pizza
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
//outputi: mushrooms
//(3) ['onion', 'olives', 'spinach']
// Eshte ky rezultat sepse kemi vendosur te funksioni i orderPiza (mainIngredient ku ne kete rast eshte mushrooms  dhe me pas otherIngrediants ku do listohen ingredientet e tjere)

restaurant.orderPizza('mushrooms');
//outputi: mushrooms
//[] (do jete array boshe)

//Pra, operatori spread përdoret  do të shkruanim vlera, të ndara me presje.
// Nga ana tjetër, REST përdoret në thelb ku do të shkruanim emrat e variablave të ndarë me presje.
//Pra, përsëri REST mund të përdoret ku do të shkruanim emrat e variablave, të ndarë me presje dhe jo vlera të ndara me presje.

//SHORT-CIRCUITING (Pra nese do kemi operation || , nese vlera e pare eshte e vertete ath kthen vleren e pare, ne te kunderten kthen te dyten)
console.log('Genta' || 3); //output: Genta
console.log(3 || 'Genta'); //output:3
console.log('' || 'Genta'); //output: Genta
console.log(undefined || null); //output: null
console.log(0 || 'Hello'); //output: Hello
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //output: Hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 20;
console.log(guests1); //outputi: 20 PSE?? sepse  restaurant.numGuests nuk ekziston dhe kur nuk ekziston i bie te jete undefined , cka do te thote qe kalon te kushti tjeter, pra 20

const guests2 = restaurant.categories ? restaurant.categories : 20;
console.log(guests2); //outputi:  ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] PSE ?? sepse ekziston restaurant.categories dhe i vendos te dhenat e kesaj

restaurant.numGuests3 = 23;
const guests3 = restaurant.numGuests3 ? restaurant.numGuests3 : 20;
console.log(guests3);

const guests4 = restaurant.numGuests3 || 10;
console.log(guests4); //outputi: 23

//OPERATORI && (Nese eshte False kthehet vleren false, nese eshte True kthehet vlera e fundit)
console.log(0 && 'GENTA'); //output:GENTA
console.log('Genta' && 3); //output: 3
console.log(3 && 'Genta'); //output:Genta
console.log(3 && 2); //output: 2
console.log(3 && ''); //output: (bosh)
console.log('' && 'Genta'); //output: (bosh)
console.log('' && 0); //output: (bosh)

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//nushish: null and undefined , (NOT 0 or '')
console.log('genta' ?? 0); //output: genta
console.log(0 ?? 'genta'); //output: 0
console.log('genta' ?? 'ana'); //output: genta
console.log(null ?? 'ana'); //output: ana
console.log(null ?? undefined); //output: undefined
console.log(undefined ?? null); //output: null
console.log(0 ?? ''); //output:0
console.log('' ?? 0); //output: (bosh)

//Logical example

const rest1 = {
  name: 'Capri',
  //numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'Piazza',
  owner: 'Giovanni',
};

//OR ASSIGNMENT OPERATOR
// rest1.numGuest = rest1.numGuest || 10;//kete mund ta shprehim dhe me kete forme
// rest2.numGuest = rest2.numGuest || 10;

//te shprehura ne forme tjeter
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//NULLISH operator
// T ?? T = T(e pare)
// T ?? F = T
// F ?? T = T
// F ?? F = F (dyte)
rest1.numGuest ??= 10; //T ?? T = T(e pare), pra 0
rest2.numGuest ??= 10; // F ?? T = T , pra 10

//AND OPERATOR
// rest1.owner = rest1.owner && '<anonymous>'; //F && F = F , PRA undefined sepse nuk ekziston
// rest2.owner = rest2.owner && '<anonymous>'; //T && F = F , PRA anonymous

rest1.owner &&= '<anonymous>';
rest2.owner &&= '<anonymous>';

console.log(rest1); //output: 30 || 10 T||T= T  PRA 30
console.log(rest2); //output: F || T = T pra 10

*/

/*-------CHALLENGE 1----------------------*/
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create na array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console,
 along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  lojtaret: function (gk, ...othersPlayers) {
    console.log(gk);
    console.log(...othersPlayers);
  },
};

//PIKA 1
console.log('----PIKA 1----');
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];
console.log(players1);
console.log(players2);

//PIKA 2
console.log('----PIKA 2----');
const gk = players1[0]; //krijimi i variablit per portjerin i cili si kusht eshte emri i pare ne liste
//console.log(gk);

//game.lojtaret(gk);
const othersPlayers = [
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];
game.lojtaret(gk, ...othersPlayers);
//game.lojtaret(gk, ...othersPlayers);
//const fieldPlayers = console.log(gk, othersPlayers);

//PIKA 3
console.log('----PIKA 3----');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//PIKA 4
console.log('----PIKA 4----');
const zv = ['Thiago', 'Coutinho', 'Perisic']; //lojtaret qe do zevendesohen
const players1Final = [...players1, ...zv];
console.log(players1Final);

//PIKA 5 krijimi i variablave

console.log('----PIKA 5----');
const team1 = game.odds.team1;
//console.log(team1);
const draw = game.odds.x;
//console.log(draw);
const team2 = game.odds.team2;
//console.log(team2);
console.log(game.odds.team1, game.odds.x, game.odds.team2);

//PIKA 6
console.log('----PIKA 6----');
console.log(
  `Players of team ${game.team1} such as ${players1[4]}, ${players1[8]}, ${players1[10]}, ${players1[5]} scored goal and right now are ${game.score}`
);

//PIKA 7
console.log('----PIKA 7----');
const winner = game.odds.team1 ? game.odds.team1 : 10;
console.log(
  `The winner is ${game.team1} with odds ${winner} and with score ${game.score[0]}`
);
