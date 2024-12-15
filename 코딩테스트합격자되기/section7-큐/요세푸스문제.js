function solution(n, k) {
  const array = Array.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  while (array.length) {
    for (let i = 0; i < k; i++) {
      array.push(array.shift());
    }
    result = array.pop();
  }
  return result;
}

console.log(solution(5, 2)); // 3
