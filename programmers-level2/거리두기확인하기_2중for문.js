function solution(places) {
  const result = [];

  places.map((place) => {
    let flag = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          if (checkRange(i + 1, j) && place[i + 1][j] === "P") {
            flag = 1;
          } else if (
            checkRange(i + 2, j) &&
            place[i + 2][j] === "P" &&
            place[i + 1][j] !== "X"
          ) {
            flag = 1;
          } else if (checkRange(i, j + 1) && place[i][j + 1] === "P") {
            flag = 1;
          } else if (
            checkRange(i, j + 2) &&
            place[i][j + 2] === "P" &&
            place[i][j + 1] !== "X"
          ) {
            flag = 1;
          } else if (
            checkRange(i + 1, j + 1) &&
            place[i + 1][j + 1] === "P" &&
            (place[i + 1][j] !== "X" || place[i][j + 1] !== "X")
          ) {
            flag = 1;
          } else if (
            checkRange(i + 1, j - 1) &&
            place[i + 1][j - 1] === "P" &&
            (place[i][j - 1] !== "X" || place[i + 1][j] !== "X")
          ) {
            flag = 1;
          }
        }
      }
    }
    if (flag) result.push(0);
    else result.push(1);
  });

  return result;
}

function checkRange(x, y) {
  if (x < 0 || y < 0 || x >= 5 || y >= 5) return false;
  return true;
}
