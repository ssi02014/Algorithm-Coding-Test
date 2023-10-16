const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // DFS + 백트랙킹
  const n = +input[0];
  const graph = input.slice(1).map((el) => el.split(" ").map(Number));
  const visited = Array(n + 1).fill(false);
  let result = Number.MAX_SAFE_INTEGER;

  const isAllVisited = () => {
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        return false;
      }
    }
    return true;
  };

  const dfs = (curNode, cost) => {
    if (isAllVisited()) {
      if (graph[curNode][0]) {
        result = Math.min(result, cost + graph[curNode][0]);
      }
      return;
    }

    for (let i = 1; i < n; i++) {
      if (!visited[i] && graph[curNode][i]) {
        visited[i] = true; // 방문 처리
        dfs(i, cost + graph[curNode][i]);
        visited[i] = false; // 방문 취소를 통해 모든 경로를 탐색할 수 있게 한다.
      }
    }
  };

  visited[0] = true;
  dfs(0, 0);

  console.log(result);
});

// 어느 한 도시에서 출발하여 모든 도시를 거친 후, 처음으로 돌아오는 문제다 즉, 백트랙킹이 필요한 문제!
// 참고로 여기서 사실은 어느 도시에서 출발하든 가장 적게 드는 비용은 동일하다.
