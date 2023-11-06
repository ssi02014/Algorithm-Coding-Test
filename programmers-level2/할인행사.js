function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const check = {};
    let validCount = 0;

    for (let j = i; j < 10 + i; j++) {
      check[discount[j]] = (check[discount[j]] || 0) + 1;
    }

    for (let j = 0; j < number.length; j++) {
      if (check[want[j]] >= number[j]) validCount++;
    }

    if (validCount === want.length) result++;
  }

  return result;
}

// 효율성 더 좋음
function solution(want, number, discount) {
  let result = 0;

  const checkMembership = (slicedList) => {
    for (let i = 0; i < want.length; i++) {
      const targetLength = slicedList.filter((el) => el === want[i]).length;

      if (!targetLength || targetLength < number[i]) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < discount.length - 9; i++) {
    const slicedList = discount.slice(i, 10 + i);
    if (checkMembership(slicedList)) {
      result++;
    }
  }

  return result;
}
