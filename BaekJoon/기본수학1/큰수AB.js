const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [a, b] = input[0].split(" ").map((el) => BigInt(el));

  console.log(`${a + b}`);
});
