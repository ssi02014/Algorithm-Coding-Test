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
    for (const i in keypad) {
      for (const j in keypad[i]) {
        if (keypad[i][j] === number) return [i, j];
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

  // 타입 별 손가락 위치 변경
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

  return numbers.reduce((acc, number) => {
    const pressedNumPosition = getPressedNumberPosition(number);
    let handType = fixedHandTypeObj[number];

    // 중앙 라인 버튼인 경우 상황에 맞게 handType 변경
    if (!handType) {
      const leftDistance = getDistance(leftHand, pressedNumPosition);
      const rightDistance = getDistance(rightHand, pressedNumPosition);

      if (leftDistance === rightDistance) {
        handType = hand;
      } else {
        handType = leftDistance < rightDistance ? "left" : "right";
      }
    }

    return (acc += changeHandPositionByType[handType](pressedNumPosition));
  }, "");
}
