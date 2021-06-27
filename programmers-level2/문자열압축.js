function solution(s) {
  const S_LENGTH = s.length;
  const newStrList = [];

  for (let i = 0; i < S_LENGTH; i++) {
    let unitCount = i + 1;
    let count = 1;
    let newStr = "";

    for (let j = 0; j < S_LENGTH; j += unitCount) {
      const currentSub = s.substring(j, j + unitCount);
      const nextSub = s.substring(j + unitCount, j + unitCount + unitCount);

      if (currentSub === nextSub) count++;
      else {
        if (count !== 1) newStr += count + currentSub;
        else newStr += currentSub;
        count = 1;
      }
    }

    newStrList.push(newStr.length);
  }

  return Math.min(...newStrList);
}
