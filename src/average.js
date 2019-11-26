const readlineSync = require("readline-sync");

const min = 0;
const max = Number.MAX_SAFE_INTEGER;
let number = 0;

console.log();

let sum = 0;
let count = 0;
do {
  number = Number(readlineSync.question("Non-negative integer: "));
  if (number >= 0 && number < max && !Number.isNaN(number) && Number.isInteger(number)) {
    sum += number;
    count += 1; 
  }
} while (Number.isNaN(number) || (!Number.isInteger(number) || number >= 0));

let average = sum / count; 

average = average.toLocaleString("en", {MAXIMUM_FRACTION_DIGITS: 3, MINIMUM_FRACTION_DIGITS: 3})
 console.log(average);
