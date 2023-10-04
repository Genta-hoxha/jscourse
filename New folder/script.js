console.log("USHTRIMI 1.1");
//x=32243
// const x = [3, 2, 2, 4, 3];
// function reverseNum(x) {
//   const num = x.split(" ").reverse();
// }
// reverseNum([3, 2, 2, 4, 3]);
const y = [3, 2, 2, 4, 3];
const num = y.reverse();
console.log(num);

console.log("USHTRIMI 1.2");
const x = 32243;
const numReserve = function (x) {
  const num = x.toString();
  const reverse = num.split("").reverse().join("");
  return reverse; //output:  ['3', '4', '2', '2', '3']
};

const reverseNum = numReserve(x);
console.log(reverseNum);

console.log("USHTRIMI 2");
// let string = "Web Development Tutorial";
const longestWord = function (string) {
  const str = string.split(" ");
  let longest = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
};
console.log(longestWord("Web Development Tutorial Javascript2023"));

console.log("USHTRIMI 3");
// let string = 'the quick brown fox'";
const firstLetter = function (string) {
  const str = string.split(" ");
  const upper = [];
  for (const i of str) {
    upper.push(i[0].toUpperCase() + i.slice(1));
  }
  console.log(upper.join(" "));
};
firstLetter("the quick brown fox");

console.log("USHTRIMI 4");
function checkVowel(string) {
  const vowel = "aeiou";
  let searchVowel = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowel.indexOf(string[i]) !== -1) {
      searchVowel++;
    }
  }
  return searchVowel;
}
const string = "the quick brown fox";
const check = checkVowel(string);

console.log(check);
//   searchVowel.push(str);
//   str = string.indexOf(vowel, str + 1);
console.log("USHTRIMI 5");

console.log("USHTRIMI 6");
// const num1 = 12;
// const num2 = 3;
// console.log(num1 * num2);
// console.log(num1 / num2);

document
  .querySelector(".multi")
  .addEventListener("click", function (num1, num2) {
    return num1 * num2;
  });

console.log("USHTRIMI 10");
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// const merge = array1.concat(array2);
const merge = [...array1, ...array2];
console.log(merge);
function merge_array(merge) {
  return [...new Set(merge)];
}
console.log(merge_array(merge));

console.log("USHTRIMI 9");
let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let most = 0;
let mostFreq = 1; //do na tregoje se sa here eshte perseritur ajo vlere, niset nga nr 1 sepse minimumi 1 here eshte perseritur
let str; //do jete nje nga indekset e arr1 i perseritjeve
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) most++;
    if (mostFreq < most) {
      mostFreq = most;
      str = arr1[i];
    }
  }
  most = 0;
}
console.log(str + (mostFreq + "times"));

console.log("USHTRIMI 8");
const number = [0, 2, 5, 4, 6, 8];
const even = function () {
  if (number % 2 == 0) return number.join("-");
};
console.log(even(number));
