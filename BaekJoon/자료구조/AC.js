const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = parseInt(input[0]);

  let result = "";

  for (let i = 0; i < T; i++) {
    const [p, n, arr] = input.splice(1, 3);
    let flag = 1;
    let deleteCount = 0;
    const list = arr
      .replace(/[\[\]\]/]/g, "")
      .split(",")
      .filter((el) => el !== "");

    for (let j = 0; j < p.length; j++) {
      if (p[j] === "R") flag *= -1;
      else {
        deleteCount++;
        if (deleteCount > n) {
          flag = -2;
          break;
        }

        if (flag === 1) list.shift();
        else list.pop();
      }
    }

    if (flag === 1) result += `[${[...list].join(",")}]` + "\n";
    else if (flag === -1) result += `[${[...list].reverse().join(",")}]` + "\n";
    else result += "error" + "\n";
  }
  console.log(result);
});
