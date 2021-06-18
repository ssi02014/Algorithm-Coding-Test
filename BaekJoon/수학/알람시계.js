const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [h, m] = input[0].split(" ").map(Number);

  if (m - 45 < 0) {
    !h ? (h = 23) : (h -= 1);
    m = 60 + (m - 45);
  } else {
    m -= 45;
  }

  console.log(`${h} ${m}`);
});
