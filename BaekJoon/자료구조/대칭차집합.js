const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const a = input[1].split(" ").map(Number);
  const b = input[2].split(" ").map(Number);

  const obj = {};

  for (let el of a) {
    if (!obj[el]) obj[el] = 1;
  }
  for (let el of b) {
    if (!obj[el]) obj[el] = 1;
    else obj[el]--;

    if (obj[el] === 0) delete obj[el];
  }
  console.log(Object.values(obj).length);
});
