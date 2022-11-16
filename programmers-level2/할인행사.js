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
