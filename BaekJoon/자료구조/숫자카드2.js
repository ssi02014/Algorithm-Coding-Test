const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const numList = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = Number(input[2]);
  const haveNumList = input[3].split(" ").map(Number);

  for (let i = 0; i < m; i++) {
    let lower = lowerBound(haveNumList[i]);
    let upper = upperBound(haveNumList[i]);

    haveNumList[i] = upper - lower;
  }

  console.log(haveNumList.join(" "));

  // 찾고자 하는 값보다 큰 값이 처음으로 나타나는 위치
  function upperBound(target) {
    let [start, end] = [0, n];

    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (target < numList[mid]) end = mid;
      else start = mid + 1;
    }
    return end;
  }

  // 찾고자 하는 값 이상의 값이 처음으로 나타나는 위치
  function lowerBound(target) {
    let [start, end] = [0, n];

    while (start < end) {
      let mid = Math.floor((start + end) / 2);

      if (target <= numList[mid]) end = mid;
      else start = mid + 1;
    }
    return end;
  }
});
