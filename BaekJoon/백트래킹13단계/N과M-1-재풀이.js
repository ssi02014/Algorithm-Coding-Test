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
  const seq = new Array(N).fill(0);
  const result = [];
  const output = [];

  const recurison = (start) => {
    if (start === M) {
      result.push([...output]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!seq[i]) {
        seq[i] = 1;
        output.push(i + 1);

        recurison(start + 1);

        output.pop();
        seq[i] = 0;
      }
    }
  };

  recurison(0);
  console.log(result.join("\n").replace(/\,/g, " "));
});
