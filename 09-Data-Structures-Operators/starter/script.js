'use strict'; /*

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

  // tani bejme destructuing od orderDelivery
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // pra vendos te gjitha property of orderDelivery
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered  to ${address} at ${time}`
    );
  },
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

/*
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

const printGoals = function (...players) {
  console.log(`${players.length} goals are scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(game.scored);

//PIKA 7
//MENYRA 1
console.log('----PIKA 7----');
const winner = game.odds.team1 ? game.odds.team1 : 10;
console.log(
  `The winner is ${game.team1} with odds ${winner} and with score ${game.score[0]}`
);
//MENYRA 2
team1 < team2 &&
  console.log(
    `The winner is ${game.team1} with odds ${winner} and with score ${game.score[0]}`
  );

  */
//OUTPUT:
/*
----PIKA 1----
(11) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
(11) ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
----PIKA 2----
Neuer
Pavard Martinez Alaba Davies Kimmich Goretzka Coman Muller Gnarby Lewandowski
----PIKA 3----
(22) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
----PIKA 4----
(14) ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Perisic']
----PIKA 5----
1.33 3.25 6.5
----PIKA 6----
Players of team Bayern Munich such as Davies, Muller, Lewandowski, Kimmich scored goal and right now are 4:0
4 goals are scored
2 goals are scored
1 goals are scored
---PIKA 7----
The winner is Bayern Munich with odds 1.33 and with score 4

 */

/*-------LOOPING ARRAYS: THE FOR-OF THE LOOP------------*/

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
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //krijojme nje konstante me emrin menu ku do afishojme te gjitha vlerat e starterMenu dhe te mainMenu
for (const item of menu) console.log(item); // me pas ketu bejme ciklin for-of (loop for element)

/*
for (const item of menu.entries()) {
  //cdo item of array
  // console.log(item);
  console.log(`${item[0] + 1}: ${item[1]}`); }
  */

//qe ta bejme me te thjeshte deklarojme dy variabla te const i, el dhe heqen item
/*
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

// console.log([...menu.entries()]);

//ENHANCED OBJECT LITERALS
//EXAMPLE 1
//Nese brenda nje objekti kemi nje property dhe kte  property e vendosim jashte ketij objekti, ath kte property brena ne objekt do shkruhet emri dhe presja
const job = 'programmer';
const genta = {
  lastName: 'Hoxha',
  age: 27,
  job,
};
console.log(genta);

//EXAMPLE 2
//Nese brenda nje objekti kemi nje funksion , per ta shkruar ne nje menyre me te thjeshte
// 1. heqim :,
//2. fshijme dhe emrin function dhe do funksionoje normalisht



/*----OPTIONAL CHAINING (?.)-----*/
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//  console.log(restaurant.openingHours.mon.open);
//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); //Outputi: undefined
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  //nuk mund ta bejme si rreshti me poshte sepse day nuk eshte nje property name ne objekt

  //restaurant.openingHours.day

  //duhet ta bejme (nese duam te perdorim nje variabel si property name duhet ta fusim ne kllapa katrore[bracket notation])
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exit');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exit');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

/*----LOOPING OBJECT -------*/
/*
//loop over an array
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); //Output: (3) ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); //Output: We are open on 3 days: thu, fri, sat,

// Property VALUES
const values = Object.values(openingHours);
console.log(values); //Output: (3) [{…}, {…}, {…}]

//Entire object
const entires = Object.entries(openingHours);
//console.log(entires); //Output: (3) [Array(2), Array(2), Array(2)]

//[key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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

/*
//MENYRA IME
//PIKA 1
console.log('-----PIKA 1-----');
const entires = Object.entries(game.scored);
console.log(entires);

const scored = ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'];
for (const scor of game.scored) {
  // console.log(scor);

  const golShenuesit = game.scored[scor]?.golShenuesit;
  console.log(`Goal 1:${scor}`);
}

//PIKA 2 (average odd)
console.log('-----PIKA 2-----');
let sum = 0;
const odds = [1.33, 3.25, 6.5];
sum = sum + odds[0] + odds[1] + odds[2];
console.log(sum);
console.log(sum / 3);

//PIKA 3
console.log('-----PIKA 3-----');
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw ${game.x}: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
*/

/*
//MENYRA VIDEOS
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/

//--------------------SETS------------------
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); //kur kemi vlera te dublikuara output:Set(3) {'Pasta', 'Pizza', 'Risotto'}
console.log(new Set('Jonas'));
console.log(orderSet.size); //madhesia e array
console.log(orderSet.has('Pizza')); //tregon nese ky element eshte brenda kesaj array, ne kete rast do kem,i si output : true
console.log(orderSet.has('Bread')); //output : false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread'); //shtimi i nje elementi
console.log(orderSet);
orderSet.delete('Risotto'); //fshirja e nje elementi
console.log(orderSet);
// orderSet.clear;

for (const order of orderSet) console.log(order);

//Example, to remove dublicate values of array

const staff = ['Waitter', 'Chef', 'Waitter', 'Manager', 'Chef', 'Waitter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waitter', 'Chef', 'Waitter', 'Manager', 'Chef', 'Waitter']).size
);
console.log(new Set('jonasschmedtmann').size);

// ----- MAPS FUNDAMENTALS ------
const rest = new Map(); //si fillim do e leme me vlere boshe , me poshte do e mbushim
rest.set('name', 'Clasaico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
//nese bejme kete:
console.log(rest.get('name')); //outputi: Clasaico Italiano
console.log(rest.get('1')); //outputi:undefined sepse 1 nuk e kemi si string por e kemi si numer
console.log(rest.get(1)); //outputi: Firenze, Italy

// const time = 21;
const time = 8;
//console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //outputi:We are open kur const time = 21
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); //outputi:We are closed kur const time = 8

console.log(rest.has('categories'));
rest.delete(2); //output: eshte fshire 2, 'Lisbon, Portugal'
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);
console.log(rest.size); //jane 7 pasi u fshi njera

console.log(rest.get(arr)); //output: Test

// ----- MAPS ITAERATION ------

//Create a new map
const question = new Map([
  ['question', 'What is the best programin language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

//Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//QUIZ APP
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//CONVERT MAP TO ARRAY
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

*/

////-------CHALLENGE 3 -------
/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//PIKA 1
console.log('---- PIKA 1 ----');
// console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log(events); //heqja e vlerave te dublikuara

//PIKA 2
console.log('---- PIKA 2 ----');
gameEvents.delete(64);
console.log(gameEvents); //delete 64, 'Yellow card'

//PIKA 3
console.log('---- PIKA 3 ----');
// console.log(
//   `On event happened, on average, every ${gameEvents.size - 1} minutes `
// );

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//PIKA 4
console.log('---- PIKA 4 ----');

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/////---Working with Strings ----------

const plane = 'portugal';
console.log(plane.slice(2)); //output:rtugal
console.log(plane.slice(2, 5)); //output:rtu
console.log(plane.slice(1, 6)); //output:ortug

const plan = 'Air Portugal';
console.log(plan.indexOf('r')); //output:2
console.log(plan.lastIndexOf('r')); //output:6
console.log(plan.slice(0, plan.indexOf(' '))); //output: Air
console.log(plan.slice(plan.lastIndexOf(' ') + 1)); //output: Portugal nese nuk do ishte + 1 atehere outputi do jete Portugal bashk eme hapsiren perpara
console.log(plan.slice(-2)); //output: al
console.log(plan.slice(1, -1)); //output: ir Portuga

//B and E are middle seats
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B'); // Output: You got the middle seat
checkMiddleSeat('23C'); // Output:  You got lucky
checkMiddleSeat('3E'); // Output: You got the middle seat

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(new String('jonas').slice(1)); //output: onas

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); //OUTPUT: tap air portugal
console.log(airline.toUpperCase()); //OUTPUT:TAP AIR PORTUGAL
//Fix capitalization in name
const passanger = 'jOnAS';
const passangerLower = passanger.toLowerCase();
const passengerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passengerCorrect); //output: Jonas

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim(); //.trim() heq hapsirat ne fillim te fjalise
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '€').replace(',', '.');
console.log(priceUS); //output: 288.97€

const announcement =
  'All passengers, come, to boarding, door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //output: All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replace(/door/g, 'gate')); //output: All passengers come to boarding gate 23. Boarding gate 23! (kjo ben te mundurreplace all door me gate)
console.log(announcement.replace(/,/g, ' ')); //heqja e presjeve

//Booleans
const planes = 'A320neo';
console.log(planes.includes('A320')); //output: true
console.log(planes.includes('Boeing')); //output: false
console.log(planes.startsWith('Air')); //output: false

const planees = 'Airbus A320neo';
console.log(planees.includes('A320')); //output: true
console.log(planees.includes('Boeing')); //output: false
console.log(planees.startsWith('Air')); //output: true

if (planees.startsWith('Airbus') && planees.endsWith('neo')) {
  console.log('Part of the NEW AIRbus family'); //output: Part of the NEW AIRbus family
}

//Practise exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('WELCOME ABOARD!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); //output: You are NOT allowed on board
checkBaggage('Socks and camera'); //output: WELCOME ABOARD!
checkBaggage('Get some snacks and a gun for protection'); //output: You are NOT allowed on board

///--- String - PART3---
//Split and join (metoda)
console.log('a+very+nice+string'.split('+')); //specifikojme nje string ndares
console.log('Genta Hoxha'.split(' '));
const [firstName, lastName] = 'Genta Hoxha'.split(' ');
const newName = ['Mrs.', firstName, lastName.toUpperCase()].join('-'); //OUTPUTI: Mrs.-Genta-HOXHA
console.log(newName);
const newName2 = ['Mrs.', firstName, lastName.toUpperCase()].join(' '); //OUTPUTI: Mrs. Genta HOXHA
console.log(newName2);

//OUTPUT: Jessica Ann Smith Davis
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); //japin te dyja te njejtin rezultat
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); //japin te dyja te njejtin rezultat
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

//PADDING
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); //Output: +++++++++++Go to gate 23!   (25 eshte gjatesia e karaktereve)
console.log('Genta'.padStart(23, '+')); //Output: ++++++++++++++++++Genta
console.log('Genta'.padEnd(10, '+')); //Output: Genta+++++ (10 tregon gjatesine e karaktereve bashke me pluset)
console.log(message.padStart(25, '+').padEnd(35, '+')); //Output: +++++++++++Go to gate 23!++++++++++
console.log('Genta'.padStart(10, '*').padEnd(15, '*')); //Output: *****Genta*****

//Example me credt card
const maskCreditCard = function (number) {
  const str = number + ''; //deklarojme nje variabel me emrin str
  const last = str.slice(-4); //ne kete rast kemi te bejme me shfaqen e 4 numrave te fundit
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4335452148525585)); //Outputi: ************5585

//REPEAT METHOD
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5)); //Outputi eshte fjalia e perseritur 5 here

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(2); //Output: There are 2 planes in line ✈✈
planesInLine(4); //Output: There are 4 planes in line ✈✈✈✈
planesInLine(7); //output: There are 7 planes in line ✈✈✈✈✈✈✈
planesInLine(10); //output: There are 10 planes in line ✈✈✈✈✈✈✈✈✈✈
*/
// Coding Challenge #4

/* 
Write a program that receives a list of variable
names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the
DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
// const text = document.querySelector('textarea').value;
//   // console.log(text);
//   const rows = text.split('\n'); //new line
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(text);
  const rows = text.split('\n');
  // console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

*/

//String Methods Practice
const flight =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//OUTPUTI:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

console.log(flight.split('+'));

for (const flig of flight.split('+')) {
  //console.log(flig);
  const [type, from, to, time] = flig.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(':', 'h')})`.padStart(56);
  console.log(output);
}
