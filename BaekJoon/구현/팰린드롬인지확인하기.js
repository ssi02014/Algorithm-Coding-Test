const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const mid = Math.floor(str.length / 2);
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  let result = 1;

  for (let i = 0; i < mid; i++) {
    if (str[pointer1] !== str[pointer2]) {
      result = 0;
      break;
    }
    pointer1++;
    pointer2--;
  }
  console.log(result);
});

// const initStr = input[0];
// const splitStr = input[0].split("");
// const reverseStr = splitStr.reverse().join("");

// reverseStr === initStr ? console.log(1) : console.log(0);
