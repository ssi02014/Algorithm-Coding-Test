const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const colors = input[1].split(" ");
  const laundry = input.slice(2, M + 2).map((el) => el.split(" "));
  let result = 0;
  let i = 0;

  laundry.sort((a, b) => a[1].charCodeAt(0) - b[1].charCodeAt(0));

  while (laundry.length !== 0) {
    if (laundry.length === 1) {
      result += parseInt(laundry[i][0]);
      laundry.splice(0, 1);
    } else {
      if (laundry[i][1] === laundry[i + 1][1]) {
        result += Math.max(laundry[i][0], laundry[i + 1][0]);
        laundry.splice(0, 2);
      } else {
        result += parseInt(laundry[i][0]);
        laundry.splice(0, 1);
      }
    }
  }

  console.log(result);
});
