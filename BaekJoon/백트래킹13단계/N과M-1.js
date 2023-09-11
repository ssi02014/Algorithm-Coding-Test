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
  const visited = new Array(N).fill(false);
  const output = [];
  let result = "";

  const dfs = (start) => {
    if (start === M) {
      result += [...output].join(" ") + "\n";
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        visited[i] = true;
        output.push(i + 1);

        dfs(start + 1);

        output.pop();
        visited[i] = false;
      }
    }
  };

  dfs(0);

  console.log(result);
});
