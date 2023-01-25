function solution(numbers, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  const fixedHandTypeObj = {
    1: "left",
    4: "left",
    7: "left",
    3: "right",
    6: "right",
    9: "right",
  };

  // 손가락 초기값 위치 SET
  let [leftHand, rightHand] = [
    [3, 0],
    [3, 2],
  ];

  // 누른 버튼의 위치 GET
  const getPressedNumberPosition = (number) => {
    for (let i = 0; i < keypad.length; i++) {
      for (let j = 0; j < keypad[0].length; j++) {
        if (keypad[i][j] === number) {
          return [i, j];
        }
      }
    }
  };

  // 현재 손가락과 버튼과의 거리 GET
  const getDistance = (position1, position2) => {
    return (
      Math.abs(position1[0] - position2[0]) +
      Math.abs(position1[1] - position2[1])
    );
  };

  const changeHandPositionByType = {
    left: (position) => {
      leftHand = position;
      return "L";
    },
    right: (position) => {
      rightHand = position;
      return "R";
    },
  };

  const result = numbers.map((number) => {
    const pressedNumPosition = getPressedNumberPosition(number);
    let handType = fixedHandTypeObj[number];

    if (!handType) {
      const leftDistance = getDistance(leftHand, pressedNumPosition);
      const rightDistance = getDistance(rightHand, pressedNumPosition);

      if (leftDistance === rightDistance) {
        handType = hand;
      } else {
        handType = leftDistance < rightDistance ? "left" : "right";
      }
    }
    return changeHandPositionByType[handType](pressedNumPosition);
  });

  return result.join("");
}
