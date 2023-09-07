function solution(prices) {
  const result = Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[i] < prices[stack.at(-1)]) {
      const last = stack.pop();
      result[last] = i - last;
    }
    stack.push(i);
  }

  while (stack.length) {
    const last = stack.pop();
    result[last] = prices.length - last - 1;
  }

  return result;
}
