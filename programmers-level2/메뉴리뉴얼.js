function solution(orders, course) {
  const result = [];
  let orederedCountObj = {};
  let maxCountObj = {};

  orders
    .map((order) => order.split("").sort().join(""))
    .forEach((el) => combination("", 0, el));

  function combination(result, idx, str) {
    if (course.includes(result.length)) {
      const max = maxCountObj[result.length] || 0;
      let count = orederedCountObj[result] || 0;

      orederedCountObj[result] = count += 1;

      if (max < count) maxCountObj[result.length] = count;
    }

    for (let i = idx; i < str.length; i++) {
      combination(result + str[i], i + 1, str);
    }
  }

  course.map((length) => {
    const max = maxCountObj[length];
    for (let order in orederedCountObj) {
      if (
        length === order.length &&
        orederedCountObj[order] >= 2 &&
        orederedCountObj[order] === max
      ) {
        result.push(order);
      }
    }
  });

  return result.sort();
}
