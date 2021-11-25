const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = input[0].split(" ").map(Number);
  const result = [];
  let p = 1;

  // 왼쪽부터 곱셈
  for (let i = 0; i < n.length; i++) {
    result.push(p);
    p *= n[i];
  }

  p = 1;

  // 오른쪽부터 곱셈한 결과를 왼쪽 곱셈 결과에 곱함
  for (let i = n.length - 1; i >= 0; i--) {
    result[i] *= p;
    p *= n[i];
  }

  console.log(result);
});
