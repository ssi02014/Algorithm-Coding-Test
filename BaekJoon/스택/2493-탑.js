const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];
  const arr = input[1].split(" ").map(Number);
  const stack = [[arr[0], 1]];
  const result = [0];

  for (let i = 1; i < n; i++) {
    const curItem = arr[i];

    while (stack.length) {
      const [stackItemNum, stackItemIdx] = stack.at(-1);

      if (curItem < stackItemNum) {
        result.push(stackItemIdx);
        break;
      }

      stack.pop();
    }

    if (!stack.length) {
      result.push(0);
    }

    stack.push([curItem, i + 1]);
  }

  console.log(result.join(" "));
});

// 5 4 3 2 1
