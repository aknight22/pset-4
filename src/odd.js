const readlineSync = require("readline-sync");

const min = 1;
const max = Number.MAX_SAFE_INTEGER;
let number = 0;

console.log("");
do {
  number = Number(readlineSync.question("Positive integer: "));
} while (number < min || Number.isNaN(number) || !(Number.isInteger(number)));

let onesPlace = 0;
let output = 0;

while (number > 0) {
  onesPlace = number % 10;

  if (onesPlace % 2 === 1) {
    output += onesPlace;
  }

  number = Math.floor(number / 10);
}

console.log("\n" + output + ".");
