// 완전 탐색(재귀)
function solution(n, info) {
  let result = Array(11).fill(0);
  let max = 0;

  shot(0, 0, 0, 0, result);

  if (max <= 0) return [-1];
  return result;

  function shot(count, idx, peachScore, ryanScore, scoreBoard) {
    // count가 n보다 커지면 모든 화살을 쏜 것이기때문에 재귀 종료
    if (n < count) return;
    // idx가 10보다 커지면 어차피 남은 화살들은 0점이기 떄문에 0점에 추가하고 스코어 계산 후 재귀 종료
    if (idx > 10) {
      const diffScore = ryanScore - peachScore;

      if (max < diffScore) {
        // max값 diffScore이 더 크다면 라이언이 더 높은 점수로 이길 수 있다는 뜻이기 때문에 교체한다.
        scoreBoard[10] = n - count; // 남은 화살 0점에다 넣기
        max = diffScore;
        result = scoreBoard;
      }
      return;
    }

    if (n > count) {
      const cloneScoreBoard = [...scoreBoard];
      // 작은값부터 체크하면서 최대값을 구해야하기 때문에 뒤에서부터 계산
      const score = 10 - idx;
      cloneScoreBoard[score] = info[score] + 1;
      shot(
        count + cloneScoreBoard[score],
        idx + 1,
        peachScore,
        ryanScore + idx,
        cloneScoreBoard
      );
    }
    if (info[10 - idx] > 0) {
      shot(count, idx + 1, peachScore + idx, ryanScore, scoreBoard);
    } else {
      shot(count, idx + 1, peachScore, ryanScore, scoreBoard);
    }
  }
}
