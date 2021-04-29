function solution(maps) {
  const start = [0, 0, 1];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [];

  let [x, y, cnt] = [0, 0, 0];
  let [nx, ny] = [0, 0];
  let result = -1;

  queue.push(start);

  while (queue.length !== 0) {
    y = queue[0][0];
    x = queue[0][1];
    cnt = queue[0][2];

    queue.shift();

    if (x === maps[0].length - 1 && y === maps.length - 1) {
      result = cnt;
      break;
    }

    for (let i = 0; i < dx.length; i++) {
      nx = x + dx[i];
      ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= maps[0].length || ny >= maps.length) {
        continue;
      }
      if (maps[ny][nx] === 2) continue;
      if (maps[ny][nx] === 0) continue;

      maps[ny][nx] = 2;
      queue.push([ny, nx, cnt + 1]);
    }
  }
  return result;
}
