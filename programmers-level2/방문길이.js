function solution(dirs) {
  const check = new Set();
  const moves = dirs.split("");
  const moveTypes = ["L", "R", "U", "D"];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  let now = [0, 0];

  for (let move of moves) {
    for (let i = 0; i < moveTypes.length; i++) {
      if (move === moveTypes[i]) {
        let nx = now[0] + dx[i];
        let ny = now[1] + dy[i];

        if (nx < -5 || ny < -5 || nx > 5 || ny > 5) continue;
        else {
          check.add(`${now[0]}${now[1]}${nx}${ny}`);
          check.add(`${nx}${ny}${now[0]}${now[1]}`);
          now = [nx, ny];
        }
      }
    }
  }
  return check.size / 2;
}
