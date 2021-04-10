const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());

  for (let i = 0; i < N; i++) {
    const stack = [];

    let bracketList = input[i];
    let result = "YES";

    for (let j = 0; j < bracketList.length; j++) {
      if (bracketList[j] === "(") stack.push(1);
      else {
        if (stack.length !== 0) stack.pop();
        else {
          result = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) result = "NO";

    console.log(result);
  }
});
