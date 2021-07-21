const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length - 1; i++) {
    const [L, P, V] = input[i].split(" ").map(Number);
    const share = Math.floor(V / P);
    const remainder = V % P > L ? L : V % P;
    const count = i + 1;

    let result = 0;

    result = share * L + remainder;

    console.log(`Case ${count}: ${result}`);
  }
});
