const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

//최대 공약수
const gcd = (a, b) => {
  return b ? gcd(b, a % b) : a;
};

//최소 공배수
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());
  let [a, b] = [0, 0];

  for (let i = 0; i < N; i++) {
    [a, b] = input[i].split(" ").map(Number);

    console.log(lcm(a, b));
  }
});
