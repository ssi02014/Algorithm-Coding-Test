const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  let result = "";

  for (let i = 1; i <= N; i++) {
    const str = input[i].split(" ");
    let bool = false;

    if (str.join("") === str.reverse().join("")) result += "0" + "\n";
    else {
      for (let i = 0; i < str.length; i++) {
        const newStr = str.filter((_, j) => i !== j);

        if (newStr.join("") === newStr.reverse().join("")) {
          bool = true;
          break;
        }
      }

      if (bool) result += "1" + "\n";
      else result += "2" + "\n";
    }
  }

  console.log(result);
});
