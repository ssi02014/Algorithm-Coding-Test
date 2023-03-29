const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, s] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  let answer = 0;

  const dfs = (sum, idx) => {
    if (idx === n) {
      if (sum === s) answer++;
      return;
    }

    dfs(sum, idx + 1); // 현재 원소를 합하지 않는 경우
    dfs(sum + arr[idx], idx + 1); // 현재 원소를 합하는 경우
  };

  dfs(0, 0);

  console.log(!s ? answer - 1 : answer); // s가 0일때 공집합도 카운트 되므로 -1
});
