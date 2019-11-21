const readlineSync = require("readline-sync");

const min = 1;
const max = Number.MAX_SAFE_INTEGER;
let number = 0;

console.log();

do {
  number = Number(readlineSync.question("Positive integer: "));
} while (number < min || !Number.isInteger(number) || Number.isNaN(number));

let output = "";
while (number > 0) {
  let onesPlace = number % 10;
  if (Math.floor(number / 10) <= 0) {
    output += String(onesPlace) + ".";
  } else {
    output += String(onesPlace) + ", ";
  }

  number = Math.floor(number / 10);
}

console.log("\n" + output);
