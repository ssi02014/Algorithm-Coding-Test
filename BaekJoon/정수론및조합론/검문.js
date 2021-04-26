const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());
  const numList = [];
  const result = [];

  let gcdNum = 0;

  for (let i = 0; i < N; i++) {
    numList.push(parseInt(input[i]));
  }

  numList.sort((a, b) => a - b);

  gcdNum = numList[1] - numList[0];

  for (let i = 2; i < N; i++) {
    gcdNum = gcd(gcdNum, numList[i] - numList[i - 1]);
  }

  for (let i = 2; i <= gcdNum; i++) {
    if (gcdNum % i === 0) result.push(i);
  }

  console.log(result.join(" "));
});
