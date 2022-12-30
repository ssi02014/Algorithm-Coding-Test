const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const createCumulativeSumList = (list, n, m) => {
  const result = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  // row 누적합
  for (let i = 1; i <= n; i++) {
    let temp = 0;

    for (let j = 1; j <= m; j++) {
      temp += list[i - 1][j - 1];
      result[i][j] = temp;
    }
  }

  // row 누적합 상태에서 column 누적합
  for (let i = 1; i <= m; i++) {
    let temp = 0;

    for (let j = 1; j <= n; j++) {
      temp += result[j][i];
      result[j][i] = temp;
    }
  }

  return result;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [n, m] = input[0].split(" ").map(Number);
  const inputList = input
    .slice(1, 1 + n)
    .map((el) => el.split(" ").map(Number));
  const cumulativeSumList = createCumulativeSumList(inputList, n, m);
  let result = "";

  input.slice(n + 2).map((el) => {
    const [i, j, x, y] = el.split(" ").map(Number);

    result += `${
      cumulativeSumList[x][y] -
      cumulativeSumList[i - 1][y] -
      cumulativeSumList[x][j - 1] +
      cumulativeSumList[i - 1][j - 1]
    }\n`;
  });

  console.log(result);
});

// 1 3 2 3 인 경우
// 63 - 0(0, 3) - 31(2, 2) + 0(0, 2)

/*
0 0 0 0
0 1 3 7
0 15 31 63
*/

/*
2 3
1 2 4
8 16 32
3
1 1 2 3
1 2 1 2
1 3 2 3
*/
