const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const arr = input[1].split(" ").map(Number);
  let spliceArr = [];
  let idx = 0;
  let temp = 0;

  for (let i = N - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      idx = i;
      break;
    }
  }

  if (idx === 0) {
    console.log(-1);
    return;
  }

  for (let i = N - 1; i >= idx; i--) {
    if (arr[idx - 1] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[idx - 1];
      arr[idx - 1] = temp;
      break;
    }
  }

  spliceArr = arr.splice(idx);
  spliceArr.sort((a, b) => a - b);
  arr.push(spliceArr.join(" "));

  console.log(arr.join(" "));
});
