// 알고리즘 BFS
function solution(land) {
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const [height, width] = [land.length, land[0].length];
  const visited = Array.from({ length: height }, () => Array(width).fill(0));
  const groupCountingObj = {};
  let groupId = 1;
  let result = 0;

  // 유효 범위/방문 여부/석유 여부 체크
  const isValid = (y, x) => {
    if (
      x < 0 ||
      y < 0 ||
      y >= height ||
      x >= width ||
      !land[y][x] ||
      visited[y][x]
    ) {
      return false;
    }
    return true;
  };

  // bfs를 통해 모든 석유 그룹을 찾아내고, 각 그룹의 크기를 계산
  const bfs = (y, x) => {
    const queue = [[y, x, 1]];
    let oilCount = 0;

    visited[y][x] = groupId;

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [dy + curY, dx + curX];

        if (isValid(ny, nx)) {
          visited[ny][nx] = groupId;
          queue.push([ny, nx, curCount + 1]);
          oilCount++;
        }
      });
    }

    // 객체에 각 그룹(groupdId)의 석유량 저장 ex) { "1": 8, "2": 7, "3": 2 }
    groupCountingObj[groupId] = oilCount + 1;
    groupId++;
  };

  // 석유가 있으며 방문하지 않은 지점들을 탐색하면서 각 그룹 및 석유량 체크
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (land[j][i] && !visited[j][i]) {
        bfs(j, i);
      }
    }
  }

  // 각 열에 대한 최대 석유량 측정
  for (let i = 0; i < width; i++) {
    const visitedGroup = {};
    let curGroup = 0;
    let curCount = 0;

    for (let j = 0; j < height; j++) {
      if (land[j][i]) {
        curGroup = visited[j][i];

        // 이미 방문했다면 continue
        if (visitedGroup[curGroup]) continue;

        curCount += groupCountingObj[curGroup];
        visitedGroup[curGroup] = true;
      }
    }

    // 기존보다 더 많은 석유량을 얻을 수 있으면 갱신
    result = Math.max(result, curCount);
  }

  return result;
}
