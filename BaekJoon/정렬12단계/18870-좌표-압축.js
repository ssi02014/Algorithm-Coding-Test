const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[1].split(" ").map(Number);
  const sortedSet = new Set([...arr].sort((a, b) => a - b));
  const obj = {};
  let i = sortedSet.size;

  for (const el of sortedSet) {
    obj[el] = sortedSet.size - i;
    i--;
  }

  const result = arr.map((el) => obj[el]).join(" ");

  console.log(result);
});
