function solution(topping) {
  const olderObj = {};
  const youngerObj = topping.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  let olderCount = 0;
  let youngerCount = new Set(topping).size;
  let result = 0;

  topping.forEach((el) => {
    if (!olderObj[el]) {
      olderCount++;
      olderObj[el] = 1;
    }

    youngerObj[el]--;

    if (!youngerObj[el]) youngerCount--;
    if (olderCount === youngerCount) result++;
  });

  return result;
}
