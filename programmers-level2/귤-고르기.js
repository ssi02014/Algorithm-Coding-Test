function solution(k, tangerine) {
  const countObj = {};
  let result = 0;
  let temp = 0;

  tangerine.forEach((el) => {
    countObj[el] = (countObj[el] || 0) + 1;
  });

  const sortedValues = Object.values(countObj).sort((a, b) => b - a);

  for (const value of sortedValues) {
    temp += value;
    result++;

    if (temp >= k) break;
  }

  return result;
}
