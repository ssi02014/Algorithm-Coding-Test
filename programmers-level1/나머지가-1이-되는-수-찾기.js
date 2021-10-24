function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) result.push(i);
  }

  return Math.min(...result);
}
