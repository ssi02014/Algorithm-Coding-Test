const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [l, r] = input[0].split(" ");
  let result = 0;

  if (l.length !== r.length) {
    return console.log(0);
  }

  for (let i = 0; i < l.length; i++) {
    if (l[i] !== r[i]) break;
    if (l[i] === r[i] && l[i] === "8") {
      result++;
    }
  }

  console.log(result);
});
