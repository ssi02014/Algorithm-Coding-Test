function solution(a, b, c, d) {
  const checkPointBoard = () => {
    const board = {};

    [a, b, c, d].forEach((el) => {
      board[el] = (board[el] || 0) + 1;
    });

    return board;
  };

  const checkCase = () => {
    const pointBoard = checkPointBoard();
    const entries = Object.entries(pointBoard);
    const tempArr = [];

    for (const key in pointBoard) {
      // case1
      if (pointBoard[key] === 4) {
        return { type: 1, keys: [key] };
      }

      // case2
      if (pointBoard[key] === 3) {
        return {
          type: 2,
          keys: entries.sort((a, b) => b[1] - a[1]).map((el) => +el[0]),
        };
      }

      if (pointBoard[key] === 2) tempArr.push(key);
    }

    // case3
    if (tempArr.length === 2) {
      return { type: 3, keys: tempArr.map(Number) };
    }

    // case4
    if (tempArr.length === 1) {
      return {
        type: 4,
        keys: entries.filter((el) => el[1] !== 2).map((el) => +el[0]),
      };
    }

    // case5
    return { type: 5, keys: [a, b, c, d] };
  };

  const calculate = (type, keys) => {
    const [key1, key2] = keys;

    // case 별로 계산
    const calcByCase = {
      1: 1111 * keys[0],
      2: (10 * key1 + key2) ** 2,
      3: (key1 + key2) * Math.abs(key1 - key2),
      4: key1 * key2,
      5: Math.min(...keys),
    };

    return calcByCase[type];
  };

  const { type, keys } = checkCase();

  return calculate(type, keys);
}
