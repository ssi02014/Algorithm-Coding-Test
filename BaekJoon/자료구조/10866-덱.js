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
  const commands = input.slice(1).map((el) => el.split(" "));
  const deque = [];
  let result = "";

  const commandExec = {
    push_front: (value) => {
      deque.unshift(value);
    },
    push_back: (value) => {
      deque.push(value);
    },
    pop_front: () => {
      result += deque[0] ? `${deque.shift()}\n` : `-1\n`;
    },
    pop_back: () => {
      result += deque[0] ? `${deque.pop()}\n` : `-1\n`;
    },
    size: () => {
      result += `${deque.length}\n`;
    },
    empty: () => {
      result += deque[0] ? `0\n` : "1\n";
    },
    front: () => {
      result += deque[0] ? `${deque[0]}\n` : "-1\n";
    },
    back: () => {
      result += deque.at(-1) ? `${deque.at(-1)}\n` : "-1\n";
    },
  };

  commands.forEach((el) => {
    const [command, value] = el;
    const exec = commandExec[command];

    exec(value);
  });

  console.log(result);
});
