const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const visited = Array(n + 1).fill(0);
  const output = [];
  let result = "";

  const recursive = (start) => {
    if (start === n) {
      result += `${output.join(" ")}\n`;
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        output.push(i);

        recursive(start + 1);

        output.pop();
        visited[i] = 0;
      }
    }
  };
  recursive(0);
  console.log(result);
});
