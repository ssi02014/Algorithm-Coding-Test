function solution(numbers, hand) {
  const keyboard = [
    ["*", 0, "#"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
  ];

  let [leftHand, rightHand] = [
    [0, 0],
    [0, 2],
  ];
  let [leftDist, rightDist] = [0, 0];
  let coord = [];
  let result = "";

  numbers.map((number) => {
    if (number === 1 || number === 4 || number === 7) {
      result += "L";
      leftHand = findPosition(keyboard, number);
    } else if (number === 3 || number === 6 || number === 9) {
      result += "R";
      rightHand = findPosition(keyboard, number);
    } else {
      coord = findPosition(keyboard, number);

      leftDist =
        Math.abs(leftHand[0] - coord[0]) + Math.abs(leftHand[1] - coord[1]);
      rightDist =
        Math.abs(rightHand[0] - coord[0]) + Math.abs(rightHand[1] - coord[1]);

      if (leftDist > rightDist) {
        result += "R";
        rightHand = coord;
      } else if (leftDist < rightDist) {
        result += "L";
        leftHand = coord;
      } else {
        if (hand === "left") {
          result += "L";
          leftHand = coord;
        } else {
          result += "R";
          rightHand = coord;
        }
      }
    }
  });

  return result;
}

function findPosition(keyboard, number) {
  let handPosition = [];

  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j] === number) handPosition = [i, j];
    }
  }

  return handPosition;
}
