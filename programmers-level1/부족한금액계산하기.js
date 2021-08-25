function solution(price, money, count) {
  let result = 0;

  for (let i = 1; i <= count; i++) {
    result += price * i;
  }
  return result - money > 0 ? result - money : 0;
}

function solution(price, money, count) {
  let result =
    price *
      Array(count)
        .fill(0)
        .reduce((acc, _, idx) => acc + idx + 1, 0) -
    money;
  return result > 0 ? result : 0;
}
