const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b] = input[0].split(" ").map(Number);
  const [c, d] = input[1].split(" ").map(Number);
  const [e, f] = [a * d + b * c, b * d];

  const gcdNum = gcd(e, f);

  console.log(`${parseInt(e / gcdNum)} ${parseInt(f / gcdNum)}`);
});
