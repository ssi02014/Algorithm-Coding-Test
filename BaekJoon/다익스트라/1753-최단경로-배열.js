// 해당 문제는 힙을 직접 구현해야 풀 수 있음
// 아래와 같은 풀이는 시간 초과
// 힙 학습 후 추후에 재 풀이
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
  const [V, E] = input[0].split(" ").map(Number);
  const startNode = +input[1];
  const connections = input.slice(2).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: V + 1 }, () => []);
  const costList = Array(V + 1).fill(Infinity);

  const dijkstra = (startNode, startCost) => {
    const queue = [[startNode, startCost]];

    while (queue.length) {
      const [curNode, curCost] = queue.shift();

      if (costList[curNode] < curCost) continue;

      graph[curNode].forEach(([nextNode, nextCost]) => {
        const accCost = costList[curNode] + nextCost;

        if (costList[nextNode] > accCost) {
          costList[nextNode] = accCost;
          queue.push([nextNode, nextCost]);
        }
      });
    }
  };

  costList[startNode] = 0;

  connections.map(([u, v, w]) => {
    graph[u].push([v, w]);
  });

  dijkstra(startNode, 0);

  console.log(
    costList
      .slice(1)
      .map((el) => (el === Infinity ? "INF" : el))
      .join("\n")
  );
});
