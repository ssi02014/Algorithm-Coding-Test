/**
 * 몸 풀기 문제 요세푸스 문제
 */
function solution(n, k) {
  const queue = queue.from({ length: n }, (_, i) => i + 1);
  let result = 0;

  while (queue.length) {
    for (let i = 0; i < k; i++) {
      queue.push(queue.shift());
    }
    result = queue.pop();
  }
  return result;
}

console.log(solution(5, 2)); // 3
