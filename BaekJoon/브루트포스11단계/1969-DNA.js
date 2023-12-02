/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1969
 * 알고리즘: 구현, 알고리즘, 브루트포스
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
  const [n, m] = input[0].split(" ").map(Number);
  const DNAList = input.slice(1);
  let sum = 0;
  let DNA = "";

  for (let i = 0; i < m; i++) {
    let counting = {
      A: 0,
      T: 0,
      G: 0,
      C: 0,
    };

    for (let j = 0; j < n; j++) {
      counting[DNAList[j][i]]++;
    }

    const entries = Object.entries(counting).filter((entry) => entry[1]);
    const values = entries.map((el) => el[1]);
    const max = Math.max(...values);

    sum += n - max;
    DNA += entries
      .filter((el) => el[1] === max)
      .sort((a, b) => a[0].localeCompare(b[0]))[0][0];
  }

  console.log(`${DNA}\n${sum}`);
});
