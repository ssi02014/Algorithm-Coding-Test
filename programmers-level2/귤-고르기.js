function solution(k, tangerine) {
  const tangerineCountArr = tangerine.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, []);
  let sum = 0;
  let result = 0;

  tangerineCountArr.sort((a, b) => b - a);

  for (const count of tangerineCountArr) {
    sum += count;
    result++;

    if (sum >= k) return result;
  }
}
