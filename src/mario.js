const readlineSync = require("readline-sync");

var height = 0;
var space = "##";

console.log("");

do {
      height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

var height2 = height;

while (height2 > 1) {
      space = " " + space
    --height2
}

console.log("\n" + space)

while (height > 1) {
    var space1 = space.replace(" #", "##")
    console.log(space1)
    --height
    var space = space1
}
console.log()
