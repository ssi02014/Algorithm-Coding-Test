const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [k, l] = input[0].split(" ").map((el) => BigInt(el));

  for (let i = 2n; i < l; i++) {
    if (k % i === 0n) {
      console.log("BAD", `${i}`);
      return;
    }
  }
  console.log("GOOD");
});
