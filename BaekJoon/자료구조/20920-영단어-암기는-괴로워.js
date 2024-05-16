/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/20920
 * 알고리즘: 자료구조, 문자열, 정렬, 해시
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
  const words = input.slice(1).filter((el) => el.length >= m);

  const count = {};

  words.forEach((word) => {
    count[word] = (count[word] || 0) + 1;
  });

  const note = words.map((word) => {
    return {
      value: word,
      count: count[word],
    };
  });

  note.sort(
    (a, b) =>
      b.count - a.count ||
      b.value.length - a.value.length ||
      a.value.localeCompare(b.value)
  );

  const set = new Set(note.map((el) => el.value));

  console.log([...set].join("\n"));
});
