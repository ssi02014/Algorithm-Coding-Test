function solution(a, b, c, d) {
  const board = {};

  const checkCase = () => {
    const tempArr = [];
    const entries = Object.entries(board);

    for (const key in board) {
      if (board[key] === 4) {
        return { type: 1, keys: [key] };
      }

      if (board[key] === 3) {
        return {
          type: 2,
          keys: entries.sort((a, b) => b[1] - a[1]).map((el) => +el[0]),
        };
      }

      if (board[key] === 2) tempArr.push(key);
    }

    if (tempArr.length === 2) {
      return { type: 3, keys: tempArr.map(Number) };
    }

    if (tempArr.length === 1) {
      return {
        type: 4,
        keys: entries.filter((el) => el[1] !== 2).map((el) => +el[0]),
      };
    }

    return { type: 5, keys: [a, b, c, d] };
  };

  const calculate = (type, keys) => {
    const [key1, key2] = keys;

    const calcByCase = {
      1: 1111 * keys[0],
      2: (10 * key1 + key2) ** 2,
      3: (key1 + key2) * Math.abs(key1 - key2),
      4: key1 * key2,
      5: Math.min(...keys),
    };

    return calcByCase[type];
  };

  [a, b, c, d].forEach((el) => {
    board[el] = (board[el] || 0) + 1;
  });

  const { type, keys } = checkCase();

  return calculate(type, keys);
}
