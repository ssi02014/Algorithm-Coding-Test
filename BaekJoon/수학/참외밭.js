const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const k = +input[0];
  const sides = input.slice(1).map((el) => el.split(" ").map(Number));
  const count = Array(6).fill(0);
  let max = 1;
  let min = 1;

  sides.forEach((side) => {
    const [direction] = side;

    count[direction - 1]++;
  });

  for (let i = 0; i < 6; i++) {
    const next = (i + 1) % 6;
    const doubleNext = (i + 2) % 6;
    const [curDirection, curLength] = sides[i];
    const nextLength = sides[next][1];
    const doubleNextDirection = sides[doubleNext][0];

    if (count[curDirection - 1] === 1) {
      max *= curLength;
      continue;
    }

    if (curDirection === doubleNextDirection) {
      min *= nextLength;
    }
  }

  console.log((max - min) * k);
});

/**
 * 주어질 수 있는 경우는 ㄱ,┏, ┗, ┛ 네 개이다.
 * ㄱ 모양의 경우에 한 번 씩 나오는 방향의 길이가 큰 사각형이 너비(North), 높이(West)이고,
 * 두 번씩 나오는 방향(South, East)의 길이들 중에, 껴있는 것이 작은 사각혐의 너비, 높이이다.
 * 다시 말해서 East방향의 길이들 중에서도 South 두 개 사이에 끼어있는 East길이가 너비이고,
 * South 방향의 길이들 중에서도 East 두 개 사이에 끼어있는 South길이가 높이이다.
 */

/* 

3 50 -> 1번만 나옴 큰 사각형의 너비 or 높이
1 100
4 20 -> 1과 1 사이에 있음 작은 사각형의 너비 or 높이
1 60 -> 1과 1 사이에 있음 작은 사각형의 너비 or 높이
4 30
2 160 -> 1번만 나옴 큰 사각형의 너비 or 높이
*/
