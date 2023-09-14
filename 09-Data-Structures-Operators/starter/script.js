'use strict';

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
  /*
  // tani bejme destructuing od orderDelivery
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // pra vendos te gjitha property of orderDelivery
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered  to ${address} at ${time}`
    );
  },
*/
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
*/

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
