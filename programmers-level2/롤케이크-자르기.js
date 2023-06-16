function solution(topping) {
  const olderObj = {};
  const youngerObj = {};
  let olderCount = 0;
  let youngerCount = new Set(topping).size;

  topping.forEach((el) => {
    youngerObj[el] = (youngerObj[el] || 0) + 1;
  });

  return topping.reduce((acc, cur) => {
    if (!olderObj[cur]) {
      olderObj[cur] = 1;
      olderCount++;
    }

    youngerObj[cur]--;

    if (!youngerObj[cur]) youngerCount--;
    if (olderCount === youngerCount) acc++;

    return acc;
  }, 0);
}
