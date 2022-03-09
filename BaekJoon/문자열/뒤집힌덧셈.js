const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ");

  let revN = +n.split("").reverse().join("");
  let revM = +m.split("").reverse().join("");
  console.log(+(revN + revM).toString().split("").reverse().join(""));
});
