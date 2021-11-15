const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  //시간 복잡도: O(n^2)
  const arr = input[0].split(" ").map(Number);
  const target = +input[1];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) result.push(i, j);
    }
  }
  console.log(result);
});
