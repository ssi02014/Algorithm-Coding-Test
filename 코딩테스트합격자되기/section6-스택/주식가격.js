/**
 * 프로그래머스 레벨2 주식 가격
 * tip: 풀이 핵심은 stack에다 값이 아닌, index를 넣는 것
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42584#
 */
function solution(prices) {
  const stack = [];
  const result = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i];

    // 가격이 떨어지는 경우
    while (stack.length && curPrice < prices[stack.at(-1)]) {
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
