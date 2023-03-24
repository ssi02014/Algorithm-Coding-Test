function solution(elements) {
  const twoElements = [...elements, ...elements];
  const sumSet = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sliceLength = 1;

    for (let j = 0; j < elements.length; j++) {
      const sum = twoElements
        .slice(j, sliceLength + i)
        .reduce((acc, cur) => acc + cur, 0);

      sumSet.add(sum);
      sliceLength++;
    }
  }

  return sumSet.size;
}
