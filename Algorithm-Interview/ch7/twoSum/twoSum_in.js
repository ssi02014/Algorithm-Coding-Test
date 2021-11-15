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
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const target = +input[1];
    const temp = target - arr[i];
    const sliceArr = arr.slice(i + 1);
    const idx = sliceArr.indexOf(temp);

    if (idx !== -1) {
      result.push(i, arr.indexOf(sliceArr[idx]));
    }
  }
  console.log(result);
});
