function solution(priorities, location) {
  const convertedPriorities = priorities.map((el, i) => [i, el]);
  const stack = [];

  while (convertedPriorities.length) {
    const maxPriority = Math.max(...convertedPriorities.map((el) => el[1]));
    const firstEl = convertedPriorities.shift();

    if (firstEl[1] !== maxPriority) {
      convertedPriorities.push(firstEl);
    } else {
      stack.push(firstEl);
    }
  }

  return stack.findIndex((el) => el[0] === location) + 1;
}
