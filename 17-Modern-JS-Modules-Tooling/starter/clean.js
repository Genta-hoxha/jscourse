const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'genta' },
  { value: -45, description: 'Groceries 🥑', user: 'genta' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'genta' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'genta' },
  { value: -1100, description: 'New iPhone 📱', user: 'genta' },
  { value: -20, description: 'Candy 🍭', user: 'ana' },
  { value: -125, description: 'Toys 🚂', user: 'ana' },
  { value: -1800, description: 'New Laptop 💻', user: 'genta' },
]);

//duam ta bejeme objektin te pandryshuar me freeze
const spendingLimits = Object.freeze({
  genta: 1500,
  ana: 100,
});

spendingLimits.jay = 200;
// console.log(spendingLimits);

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
// const getLimit = user => spendingLimits?.[user] ?? 0;

const getLimit = (limits, user) => limits?.[user] ?? 0;

//PURE FUNCTION
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'genta'
) {
  // if (!user) user = 'genta';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits?.[user] ?? 0;
  // const cleanUser = getLimit(cleanUser);

  // if (value <= limit) {
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // budget.push({ value: -value, description: description, user: user });

  //     budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Ana'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
// console.log(budget);
// console.log(newBudget1);
// console.log(newBudget2);
console.log(newBudget3);

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of newBudget3) {
//   //   if (entry.value < -getLimit(limits, entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
// };
// let lim;
// if (spendingLimits[entry.user]) {
//   lim = spendingLimits[entry.user];
// } else {
//   lim = 0;
// }

// const limit = spendingLimits?.[entry.user] ?? 0;

// if (entry.value < -limit) {
//   entry.flag = 'limit';
// }

// checkExpenses();

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);
// console.log(budget);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
    .join(' / ');
  console.log(bigExpenses);

  // let output = '';
  // for (const el of budget) {
  //   if (el.value <= -bigLimit) {
  //     output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
  //   }
  // }
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   // Emojis are 2 chars
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(500);
