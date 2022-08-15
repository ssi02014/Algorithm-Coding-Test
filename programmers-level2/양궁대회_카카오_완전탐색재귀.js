// 완전 탐색(재귀)
function solution(n, info) {
  let result = Array(11).fill(0);
  let max = 0;

  shot(0, 0, 0, 0, result);

  if (max <= 0) return [-1];
  return result;

  function shot(peachScore, ryanScore, count, idx, scoreBoard) {
    // count가 n보다 커지면 재귀 종료
    if (n < count) return;
    // idx가 10이면 스코어 계산 후 종료
    if (idx > 10) {
      const scoreDiff = ryanScore - peachScore;

      if (max < scoreDiff) {
        scoreBoard[10] = n - count;
        max = scoreDiff;
        result = scoreBoard;
      }
      return;
    }

    if (n > count) {
      const candidate = [...scoreBoard];
      candidate[10 - idx] = info[10 - idx] + 1;
      shot(
        peachScore,
        ryanScore + idx,
        count + info[10 - idx] + 1,
        idx + 1,
        candidate
      );
    }

    if (info[10 - idx] > 0) {
      shot(peachScore + idx, ryanScore, count, idx + 1, scoreBoard);
    } else {
      shot(peachScore, ryanScore, count, idx + 1, scoreBoard);
    }
  }
}
