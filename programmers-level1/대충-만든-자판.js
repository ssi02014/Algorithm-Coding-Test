function solution(keymap, targets) {
  const result = [];
  const bestKeyMap = keymap.reduce((acc, cur) => {
    cur.split("").forEach((char, j) => {
      acc[char] = acc[char] ? Math.min(acc[char], j + 1) : j + 1;
    });

    return acc;
  }, {});

  for (const target of targets) {
    let tempCount = 0;

    for (const char of target) {
      if (!bestKeyMap[char]) {
        tempCount = -1;
        break;
      }
      tempCount += bestKeyMap[char];
    }
    result.push(tempCount);
  }

  return result;
}
