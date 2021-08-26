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
  const woodList = input[1].split(" ").map(Number);
  let result = 0;
  let [first, last] = [0, woodList[n - 1]];

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    let temp = 0;

    woodList.map((el) => mid < el && (temp += el - mid));

    if (temp >= m) {
      result < mid && (result = mid);
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  console.log(result);
});
