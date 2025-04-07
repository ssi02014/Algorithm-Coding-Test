/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/14499
 * 알고리즘: 구현, 시뮬레이션
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, y, x, k] = input[0].split(" ").map(Number);
  const map = input.slice(1, n + 1).map((el) => el.split(" ").map(Number));
  const diceOrders = input.at(-1).split(" ").map(Number);
  const dice = [0, 0, 0, 0, 0, 0];

  const nextMove = {
    1: [0, 1],
    2: [0, -1],
    3: [-1, 0],
    4: [1, 0],
  };

  let curY = y;
  let curX = x;
  let result = "";

  // 주사위 순서에 맞게 주사위 변경
  const changeDice = (order) => {
    switch (order) {
      // 동
      case 1: {
        [dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]] = [
          dice[3],
          dice[1],
          dice[0],
          dice[5],
          dice[4],
          dice[2],
        ];
        break;
      }
      // 서
      case 2: {
        [dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]] = [
          dice[2],
          dice[1],
          dice[5],
          dice[0],
          dice[4],
          dice[3],
        ];
        break;
      }
      // 북
      case 3: {
        [dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]] = [
          dice[4],
          dice[0],
          dice[2],
          dice[3],
          dice[5],
          dice[1],
        ];
        break;
      }
      // 남
      default: {
        [dice[0], dice[1], dice[2], dice[3], dice[4], dice[5]] = [
          dice[1],
          dice[5],
          dice[2],
          dice[3],
          dice[0],
          dice[4],
        ];
        break;
      }
    }
  };

  const isValid = (y, x) => {
    if (y >= 0 && x >= 0 && y < n && x < m) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < k; i++) {
    const curOrder = diceOrders[i];
    const [dy, dx] = nextMove[curOrder];
    const [ny, nx] = [curY + dy, curX + dx];

    if (!isValid(ny, nx)) continue;

    curY = ny;
    curX = nx;

    changeDice(curOrder);

    if (map[curY][curX] === 0) {
      map[curY][curX] = dice[5];
    } else {
      dice[5] = map[curY][curX];
      map[curY][curX] = 0;
    }

    result += `${dice[0]}\n`;
  }

  console.log(result.trim());
});

// 위, 뒤, 동, 서, 앞, 아래
// 1, 2, 3, 4, 5, 6 -> 기본
// 4, 2, 1, 6, 5, 3, -> 동
// 3, 2, 6, 1, 5, 4, -> 서
// 5, 1, 3, 4, 6, 2, -> 북
// 2, 6, 3, 4, 1, 5, -> 남
