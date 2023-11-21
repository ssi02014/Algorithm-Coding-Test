/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/26215
 * 알고리즘: 그리디
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
  let list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let result = 0;

  while (list.length > 1) {
    const diff = list[0] - list[1];

    result += list[1];
    list[1] = diff;

    list.shift();
    list.sort((a, b) => b - a);
  }

  if (list.length > 0) result += list[0];
  console.log(result > 1440 ? -1 : result);
});
