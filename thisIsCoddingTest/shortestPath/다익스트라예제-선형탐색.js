const INF = Infinity;
const matrix = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];
const isVisitd = new Array(matrix.length).fill(false);
const distance = new Array(matrix.length).fill(0);

function getSmallerIndex() {
  let min = INF;
  let idx = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (distance[i] < min && !isVisitd[i]) {
      min = distance[i];
      idx = i;
    }
  }
  return idx;
}

function dijstra(start) {
  for (let i = 0; i < matrix.length; i++) {
    distance[i] = matrix[start][i];
  }

  isVisitd[start] = true;

  for (let i = 0; i < matrix.length - 2; i++) {
    let current = getSmallerIndex();

    isVisitd[current] = true;

    for (let j = 0; j < matrix.length; j++) {
      if (!isVisitd[j]) {
        if (distance[current] + matrix[current][j] < distance[j]) {
          distance[j] = distance[current] + matrix[current][j];
        }
      }
    }
  }
}

dijstra(0);

console.log(distance);
