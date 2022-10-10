function solution(...args) {
  const obj = {};

  for (const el of args) {
    obj[el] = (obj[el] || 0) + 1;
    if (obj[el] > 1) return true;
  }

  return false;
}

console.log(solution(1, 2, 3)); // false
console.log(solution(1, 2, 2)); // true
console.log(solution("a", "b", "c", "a")); // true
