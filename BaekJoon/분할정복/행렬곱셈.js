const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function createMatrix(row, column, input) {
  const matrix = [];

  for (let i = 0; i < row; i++) {
    matrix[i] = input.shift().split(" ").map(Number);
  }

  return matrix;
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input.shift().split(" ").map(Number);
  const firstMatrix = createMatrix(N, M, input);

  const [K, R] = input.shift().split(" ").map(Number);
  const secondMatrix = createMatrix(K, R, input);

  const multipleMatrix = Array.from(new Array(N), () => new Array(K));
  let result = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < R; j++) {
      let temp = 0;

      for (let k = 0; k < M; k++) {
        temp += firstMatrix[i][k] * secondMatrix[k][j];
      }
      multipleMatrix[i][j] = temp;
    }
  }

  multipleMatrix.forEach((list) => {
    list.forEach((element) => {
      result += element + " ";
    });
    result += "\n";
  });
  console.log(result);
});
