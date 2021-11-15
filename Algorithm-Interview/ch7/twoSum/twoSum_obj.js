const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[0].split(" ").map(Number);
  const target = +input[1];
  const result = [];
  const numsMap = {};

  for (let i in arr) {
    if (
      Object.keys(numsMap)
        .map(Number)
        .includes(target - arr[i])
    ) {
      result.push(+numsMap[target - arr[i]], +i);
    }
    numsMap[arr[i]] = i;
  }
  console.log(result);
});
