function solution(n, wires) {
  const matrix = adjacencyMatrix(wires);
  const visit = Array(n + 1).fill(0);
  let count = 0;

  return wires.reduce((acc, [x, y]) => {
    [matrix[x][y], matrix[y][x]] = [0, 0];

    dfs(1);

    [matrix[x][y], matrix[y][x]] = [1, 1];

    acc = Math.min(acc, Math.abs(n - 2 * count));
    visit.forEach((_, i) => (visit[i] = 0));
    count = 0;

    return acc;
  }, n);

  function dfs(tower) {
    visit[tower] = 1;
    count++;

    for (let i = 1; i <= n; i++) {
      matrix[tower][i] && !visit[i] && dfs(i);
    }
  }

  function adjacencyMatrix(wires) {
    const matrix = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    wires.forEach(([x, y]) => {
      [matrix[x][y], matrix[y][x]] = [1, 1];
    });

    return matrix;
  }
}
