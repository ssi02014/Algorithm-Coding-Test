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
  let result = "";
  let i = 0;
  // 41532
  while ("12345" !== arr.join("")) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      result += arr.join(" ") + "\n";
    }
    i++;
    if (i === 4) i = 0;
  }
  console.log(result);
});
