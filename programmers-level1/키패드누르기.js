function findPosition(keyboard, number) {
  let handPosition = [];

  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j] === number) handPosition = [i, j];
    }
  }

  return handPosition;
}

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
  let centerNum = [];
  let result = "";

  numbers.map((number) => {
    if (number === 1 || number === 4 || number === 7) {
      result += "L";
      leftHand = findPosition(keyboard, number);
    } else if (number === 3 || number === 6 || number === 9) {
      result += "R";
      rightHand = findPosition(keyboard, number);
    } else {
      centerNum = findPosition(keyboard, number);
      leftDist =
        Math.abs(leftHand[0] - centerNum[0]) +
        Math.abs(leftHand[1] - centerNum[1]);
      rightDist =
        Math.abs(rightHand[0] - centerNum[0]) +
        Math.abs(rightHand[1] - centerNum[1]);

      if (leftDist > rightDist) {
        result += "R";
        rightHand = centerNum;
      } else if (leftDist < rightDist) {
        result += "L";
        leftHand = centerNum;
      } else {
        if (hand === "left") {
          result += "L";
          leftHand = centerNum;
        } else {
          result += "R";
          rightHand = centerNum;
        }
      }
    }
  });

  return result;
}
