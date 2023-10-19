function solution(elements) {
  const set = new Set();
  const twoElements = [...elements, ...elements];

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const sum = twoElements
        .slice(j, i + j)
        .reduce((acc, cur) => acc + cur, 0);

      set.add(sum);
    }
  }
  return set.size;
}
