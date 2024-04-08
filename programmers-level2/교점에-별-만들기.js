function solution(line) {
  const crossPositions = [];
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  // 교차점 탐색
  for (let i = 0; i < line.length; i++) {
    const [a, b, e] = line[i];

    for (let j = i + 1; j < line.length; j++) {
      const [c, d, f] = line[j];
      const denominator = a * d - b * c;

      // 평행 또는 일치
      if (denominator === 0) {
        continue;
      }

      const xNumerator = b * f - e * d;
      const yNumerator = e * c - a * f;

      // 정수가 아닌 교차점
      if (xNumerator % denominator || yNumerator % denominator) {
        continue;
      }

      const x = xNumerator / denominator;
      const y = yNumerator / denominator;

      crossPositions.push([x, y]);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  // 그래프
  const graph = Array.from({ length: maxY - minY + 1 }, () =>
    Array(maxX - minX + 1).fill(".")
  );

  // 별표 찍기
  crossPositions.forEach((position) => {
    const [x, y] = position;

    graph[maxY - y][x - minX] = "*";
  });

  return graph.map((el) => el.join(""));
}
