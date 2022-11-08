const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const availableCoin = [];
  const coinList = input.slice(1).map(Number);
  let [N, K] = input[0].split(" ").map(Number);
  let count = 0;

  for (let i = 0; i < N; i++) {
    if (coinList[i] <= K) availableCoin.push(coinList[i]);
  }

  availableCoin.sort((a, b) => b - a);

  for (const coin of availableCoin) {
    count += Math.floor(K / coin);
    K = K % coin;
  }
  console.log(count);
});
