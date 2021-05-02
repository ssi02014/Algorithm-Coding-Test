function solution(n, arr1, arr2) {
  const mapOne = [];
  const mapTwo = [];
  const integrateMap = [];
  const result = [];

  let temp = [];
  let binaryNum = [];

  arr1.map((el) => {
    binaryNum = el.toString(2).split("");

    while (binaryNum.length !== n) {
      binaryNum.unshift("0");
    }

    mapOne.push(binaryNum);
  });

  arr2.map((el) => {
    binaryNum = el.toString(2).split("");

    while (binaryNum.length !== n) {
      binaryNum.unshift("0");
    }

    mapTwo.push(binaryNum);
  });

  for (let i = 0; i < mapOne.length; i++) {
    temp = [];

    for (let j = 0; j < mapOne[i].length; j++) {
      if (mapOne[i][j] === mapTwo[i][j]) temp.push(mapOne[i][j]);
      else temp.push("1");
    }

    integrateMap.push(temp);
  }

  integrateMap.map((el) => {
    temp = [];

    el.map((ele) => {
      if (ele === "1") temp.push("#");
      else temp.push(" ");
    });

    result.push(temp.join(""));
  });

  return result;
}
