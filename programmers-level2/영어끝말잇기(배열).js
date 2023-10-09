// solution1: stack
function solution(n, words) {
  const stack = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const curWord = words[i];
    const lastWord = stack.at(-1);
    const humanSeq = (i + 1) % n || n;
    const turn = Math.ceil((i + 1) / n);
    const isValid = !stack.includes(curWord) && curWord[0] === lastWord.at(-1);

    if (!isValid) return [humanSeq, turn];
    stack.push(curWord);
  }

  return [0, 0];
}

// solution2: object
function solution(n, words) {
  const countObj = {};
  let humanSeq = 0;
  let prevWord = "";

  for (let i = 0; i < words.length; i += n) {
    humanSeq++;

    for (let j = i; j < i + n; j++) {
      const curWord = words[j];

      if (!prevWord) {
        prevWord = curWord;
        countObj[curWord] = 1;
        continue;
      }

      const turn = (j % n) + 1;
      const curWordFirstChar = curWord[0];
      const prevWordLastChar = prevWord.at(-1);
      const isEliminated =
        curWordFirstChar !== prevWordLastChar || countObj[curWord] > 0;

      if (isEliminated) {
        return [turn, humanSeq];
      }

      countObj[curWord] = 1;
      prevWord = curWord;
    }
  }

  return [0, 0];
}
