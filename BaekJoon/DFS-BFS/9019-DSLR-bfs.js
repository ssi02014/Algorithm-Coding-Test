const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const testList = input.slice(1);
  let result = "";

  const DSLRObj = {
    D: (value) => {
      return (value * 2) % 10000;
    },
    S: (value) => {
      return value - 1 < 0 ? 9999 : value - 1;
    },
    L: (value) => {
      const num1 = value % 1000;
      const num2 = Math.floor(value / 1000);

      return 10 * num1 + num2;
    },
    R: (value) => {
      const num1 = value % 10;
      const num2 = Math.floor(value / 10);

      return 1000 * num1 + num2;
    },
  };

  const bfs = (a, b) => {
    const queue = [[a, ""]];
    const visited = Array(10000).fill(false);

    visited[a] = true;

    while (queue.length) {
      const [value, str] = queue.shift();

      if (value === b) return str;

      for (const key in DSLRObj) {
        const newValue = DSLRObj[key](value);

        if (!visited[newValue]) {
          queue.push([newValue, str + key]);
          visited[newValue] = true;
        }
      }
    }
  };

  testList.forEach((testCase) => {
    const [a, b] = testCase.split(" ").map(Number);

    result += `${bfs(a, b)}\n`;
  });

  console.log(result);
});
