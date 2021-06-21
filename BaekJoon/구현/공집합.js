const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 틀린 문제임 다시 풀어야 됨 이유: 메모리 초과 다음 풀이 때는 Set으로 풀어보기
  const N = parseInt(input[0]);
  let emptySet = [];
  let result = "";

  for (let i = 1; i <= N; i++) {
    const calculate = input[i].split(" ")[0];
    const num = parseInt(input[i].split(" ")[1]);

    if (calculate === "add") emptySet.push(num);
    else if (calculate === "remove") emptySet.splice(emptySet.indexOf(num), 1);
    else if (calculate === "check") {
      if (emptySet.includes(num)) result += "1" + "\n";
      else result += "0" + "\n";
    } else if (calculate === "toggle") {
      if (emptySet.includes(num)) emptySet.splice(emptySet.indexOf(num), 1);
      else emptySet.push(num);
    } else if (calculate === "all") {
      emptySet = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ];
    } else if (calculate === "empty") {
      emptySet = [];
    }
  }

  console.log(result);
});
