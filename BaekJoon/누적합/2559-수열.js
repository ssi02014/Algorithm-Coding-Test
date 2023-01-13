const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const temperatures = input[1].split(" ").map(Number);
  let sum = temperatures.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let result = sum;

  for (let i = k; i < temperatures.length; i++) {
    sum += temperatures[i] - temperatures[i - k];
    result = Math.max(result, sum);
  }

  console.log(result);
});

/* 누적합
const [n, k] = input[0].split(" ").map(Number);
const temperatures = input[1].split(" ").map(Number);
const cumulativeSumList = temperatures.reduce((acc, cur) => {
  return !acc.length ? [cur] : [...acc, acc.at(-1) + cur];
}, []);
let result = Number.MIN_SAFE_INTEGER;

for (let i = 0; i <= n - k; i++) {
  result = Math.max(
    result,
    cumulativeSumList[i + k - 1] - (cumulativeSumList[i - 1] || 0)
  );
}

console.log(result);
*/
