// 풀이1 O(N^3)
function solution(msg) {
  const result = [];
  const dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i <= msg.length; i++) {
    let cur = msg[i];

    for (let j = i + 1; j <= msg.length; j++) {
      const curIdx = dict.indexOf(cur);
      const nextIdx = dict.indexOf(cur + msg[j]);

      if (nextIdx === -1) {
        dict.push(cur + msg[j]);
        result.push(curIdx + 1);
        break;
      }
      cur += msg[j];
      i++;
    }
  }
  return result;
}

// 풀이2
function solution(msg) {
  const result = [];
  const dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // 시간 복잡도 O(N^2)
  const lastWordAndCompression = msg.split("").reduce((acc, cur) => {
    const nextWord = acc + cur;
    const nextWordIdx = dict.indexOf(nextWord);
    const prevWordIdx = dict.indexOf(acc);

    if (nextWordIdx !== -1) return acc + cur;
    dict.push(nextWord);

    if (prevWordIdx !== -1) result.push(prevWordIdx + 1);
    return cur;
  }, "");

  result.push(dict.indexOf(lastWordAndCompression) + 1);
  return result;
}
