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
  const n = +input[0];
  const [first, ...rest] = input[1].split(" ").map(Number);
  let result = "";

  rest.forEach((el) => {
    const gcd = getGcd(first, el);

    result += `${Math.floor(first / gcd)}/${Math.floor(el / gcd)}\n`;
  });

  console.log(result);

  function getGcd(a, b) {
    return b ? getGcd(b, a % b) : a;
  }
});
