function solution(...args) {
  let [i, j] = [0, 1];

  args.sort((a, b) => {
    if (a < b) return -1;
  });

  while (i < args.length) {
    if (args[i] === args[j]) return true;
    i++;
    j++;
  }

  return false;
}

console.log(solution(1, 2, 3)); // false
console.log(solution(1, 2, 2)); // true
console.log(solution("a", "b", "c", "a")); // true
