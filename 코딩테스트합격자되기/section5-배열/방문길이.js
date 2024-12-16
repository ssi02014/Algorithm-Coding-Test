/**
 * 프로그래머스 레벨1 방문길이(재풀이)
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/49994
 */
function solution(dirs) {
  const MAX_LENGTH = 5;
  const MIN_LENGTH = -5;
  const MOVES = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  const position = [0, 0];
  const set = new Set();

  const getValid = (y, x) => {
    if (y < MIN_LENGTH || x < MIN_LENGTH || x > MAX_LENGTH || y > MAX_LENGTH) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];

    const [dy, dx] = MOVES[dir];
    const [curY, curX] = position;
    const [ny, nx] = [curY + dy, curX + dx];

    if (getValid(ny, nx)) {
      position[0] = ny;
      position[1] = nx;

      // 양방향 저장 [0, 0] -> [1, 0] 과 [1, 0] -> [0, 0] 둘은 같은 지나간 길임
      set.add(`${curY}${curX}${ny}${nx}`);
      set.add(`${ny}${nx}${curY}${curX}`);
    }
  }

  return set.size / 2;
}
