function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, count) => {
    if (count >= answer) return;
    if (!num) {
      answer = count;
      return;
    }
    const oneDigit = num % 10;

    // 층을 내려갔을 경우
    dfs(Math.floor(num / 10), count + oneDigit);
    // 층을 올라갔을 경우
    dfs(Math.floor(num / 10) + 1, count + 10 - oneDigit);
  };

  dfs(storey, 0);
  return answer;
}
