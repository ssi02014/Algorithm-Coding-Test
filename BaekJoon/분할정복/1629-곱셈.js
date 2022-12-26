const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const recursive = (a, b, c) => {
  if (b === BigInt(0)) return BigInt(1);

  const temp = recursive(a, BigInt(parseInt(b / BigInt(2))), c);

  if (b % BigInt(2)) {
    return (((temp * temp) % c) * a) % c;
  }
  return (temp * temp) % c;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [a, b, c] = input[0].split(" ").map(BigInt);
  console.log(Number(recursive(a, b, c)));
});

/**
 * 지수 법칙: a^(n+m) = a^n * a^m
 * 모듈러 성질 : (a*b)%c = (a%c * b%c)%c
 */
