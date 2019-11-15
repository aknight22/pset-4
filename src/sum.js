const readlineSync = require("readline-sync");

const min = Number.MIN_SAFE_INTEGER;
const max = Number.MAX_SAFE_INTEGER;
let sum = 0;

console.log();

do {
lowerBound = Number(readlineSync.question("Lower bound: "));
upperBound = Number(readlineSync.question("Upper bound: "));
} while (Number.isNaN(lowerBound) ||
         Number.isNaN(upperBound) ||
         !Number.isInteger(lowerBound) ||
         !Number.isInteger(upperBound) ||
         lowerBound > upperBound);

if (lowerBound % 2 !== 0) {
  lowerBound = lowerBound + 1;
}

for (let i = lowerBound; i <= upperBound; i=i+2) {
sum = sum + i;
}

sum = sum.toLocaleString("en", { style: "decimal"});
console.log("\n"+sum+".");
