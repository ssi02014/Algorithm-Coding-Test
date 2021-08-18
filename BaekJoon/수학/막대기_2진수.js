const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let count = 0;
  
  parseInt(input[0])
    .toString(2)
    .split("")
    .forEach(el => el === '1' && count++);

  console.log(count);
});
