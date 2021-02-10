const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];
  
  const visited = {};
  const result = [];
  
  //DFS는 큐1개 스택1개 필요 or 재귀
  function dfs(graph, startNode, visited) {
    visited[startNode] = true;

    result.push(startNode);

    for (let i of graph[startNode]) {
      if (!visited[i]) dfs(graph, i, visited);
    }

  }
  
  dfs(graph, 1, visited);
  
  console.log(visited);
  console.log(result.join(" "));