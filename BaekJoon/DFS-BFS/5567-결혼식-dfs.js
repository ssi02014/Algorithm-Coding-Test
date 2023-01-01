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
  const m = +input[1];
  const friends = input.slice(2).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  const checkList = Array(m + 1).fill(false);
  let result = 0;

  friends.forEach((friend) => {
    const [node1, node2] = friend;

    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  const dfs = (startNode, depth) => {
    if (depth === 2) return;

    graph[startNode].forEach((node) => {
      checkList[node] = true;
      dfs(node, depth + 1);
    });
  };

  dfs(1, 0);

  checkList.forEach((el) => el && result++);
  console.log(result ? result - 1 : 0);
});
