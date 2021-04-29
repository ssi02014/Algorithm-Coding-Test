const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input[0].split("");
  const M = parseInt(input[1]);
  const strList = new Set();

  for (let i = 0; i < N.length; i++) {
    let char = N[i];
    strList.add(char);

    for (let j = i + 1; j < N.length; j++) {
      char += N[j];
      strList.add(char);
    }
  }
  console.log(Array.from(strList).sort()[M - 1]);
});
