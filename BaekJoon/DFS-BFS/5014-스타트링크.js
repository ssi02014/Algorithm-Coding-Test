const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [f, s, g, u, d] = input[0].split(" ").map(Number);
  const visited = Array(f + 1).fill(false);

  const bfs = (start, count) => {
    const queue = [[start, count]];

    while (queue.length) {
      const [curNode, count] = queue.shift();

      if (curNode === g) return count;

      [u, d].forEach((el, idx) => {
        const nextNode = idx === 0 ? curNode + el : curNode - el;

        if (nextNode > 0 && nextNode <= f && !visited[nextNode]) {
          queue.push([nextNode, count + 1]);
          visited[nextNode] = true;
        }
      });
    }

    return "use the stairs";
  };

  console.log(bfs(s, 0));
});
