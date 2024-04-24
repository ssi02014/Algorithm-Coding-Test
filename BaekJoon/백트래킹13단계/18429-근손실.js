/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/18429
 * 알고리즘: 백트랙킹
 */

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
  const incrementList = input[1].split(" ").map(Number);
  const visited = Array(n).fill(false);
  const output = [];
  let result = 0;

  const calculate = (arr) => {
    let value = 500;

    for (const item of arr) {
      if (value < 500) break;

      value += item - k;
    }
    if (value >= 500) result++;
  };

  const recursive = (start) => {
    if (start === n) {
      calculate([...output]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        output.push(incrementList[i]);

        recursive(start + 1);

        output.pop();
        visited[i] = false;
      }
    }
  };

  recursive(0);

  console.log(result);
});
