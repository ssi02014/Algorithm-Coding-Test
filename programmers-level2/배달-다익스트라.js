function solution(N, road, K) {
  const distList = Array(N + 1).fill(Infinity);
  const graph = Array.from({ length: N + 1 }, () => []);
  let result = 0;

  const bfs = (startNode, startDist) => {
    const queue = [[startNode, startDist]];

    while (queue.length) {
      const [curNode, dist] = queue.shift();

      graph[curNode].forEach(([nextNode, nextDist]) => {
        const accDist = distList[curNode] + nextDist;

        if (distList[nextNode] > accDist) {
          distList[nextNode] = accDist;
          queue.push([nextNode, nextDist]);
        }
      });
    }
  };

  road.forEach(([node1, node2, dist]) => {
    graph[node1].push([node2, dist]);
    graph[node2].push([node1, dist]);
  });

  distList[1] = 0;
  bfs(1, 0);

  distList.forEach((dist) => dist <= K && result++);

  return result;
}
