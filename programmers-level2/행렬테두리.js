function createMap(rows, columns) {
  const map = [];
  let value = 1;

  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(value++);
    }
    map.push(temp);
  }

  return map;
}

function getMin(min, value) {
  if (min > value) return value;
  return min;
}

function rotate(map, query) {
  let [x1, y1, x2, y2] = query;

  x1--;
  x2--;
  y1--;
  y2--;

  const temp = map[x1][y1];
  let min = temp;

  // 왼
  for (let i = x1; i < x2; i++) {
    map[i][y1] = map[i + 1][y1];
    min = getMin(min, map[i][y1]);
  }

  // 아래
  for (let i = y1; i < y2; i++) {
    map[x2][i] = map[x2][i + 1];
    min = getMin(min, map[x2][i]);
  }

  // 오
  for (let i = x2; i > x1; i--) {
    map[i][y2] = map[i - 1][y2];
    min = getMin(min, map[i][y2]);
  }

  // 위
  for (let i = y2; i > y1; i--) {
    map[x1][i] = map[x1][i - 1];
    min = getMin(min, map[x1][i]);
  }

  map[x1][y1 + 1] = temp;

  return min;
}

function solution(rows, columns, queries) {
  const map = createMap(rows, columns);
  const result = [];

  queries.forEach((el) => {
    result.push(rotate(map, el));
  });

  return result;
}
