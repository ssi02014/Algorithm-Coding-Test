function getOneCount(str) {
  let result = 0;

  for (const char of str) {
    if (char === "1") result++;
  }
  return result;
}

function solution(n) {
  const binaryNum = n.toString(2);
  const targetCount = getOneCount(binaryNum);

  while (true) {
    const nextBinaryNum = (++n).toString(2);
    const nextCount = getOneCount(nextBinaryNum);

    if (nextCount === targetCount) return n;
  }
}

// solution2 정규표현식 with. match
function solution(n) {
  const binaryN = n.toString(2);

  const getBinaryCount = (value) => {
    return value.match(/1/g).length;
  };

  const binaryNOneCount = getBinaryCount(binaryN);

  while (true) {
    const nextBinaryN = (++n).toString(2);
    const nextBinaryNCount = getBinaryCount(nextBinaryN);

    if (binaryNOneCount === nextBinaryNCount) {
      return n;
    }
  }
}
