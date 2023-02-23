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
