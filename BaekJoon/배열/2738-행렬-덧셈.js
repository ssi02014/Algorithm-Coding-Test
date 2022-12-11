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
  const [n, m] = input[0].split(" ").map(Number);
  const arr1 = input.slice(1, n + 1).map((el) => el.split(" ").map(Number));
  const arr2 = input.slice(n + 1).map((el) => el.split(" ").map(Number));
  let result = [];

  // console.log(arr1, arr2);
  for (let i = 0; i < n; i++) {
    let temp = [];

    for (let j = 0; j < m; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }

    result.push(temp.join(" "));
  }

  console.log(result.join("\n"));
});
