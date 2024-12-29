/**
 * 프로그래머스 레벨2 [PCCP 기출문제] 퍼즐 게임 챌린지 (재풀이)
 * 알고리즘: 이분탐색(Binary Search)
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/340212
 */
function solution(diffs, times, limit) {
  let min = 1;
  let max = limit;

  // level에 따른 최종 해결 시간을 구함
  const getTotalSolvingTime = (level) => {
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];

      if (level >= diff) {
        totalTime += times[i];
      } else {
        totalTime += (times[i - 1] + times[i]) * (diff - level) + times[i];
      }
    }

    return totalTime;
  };

  while (min <= max) {
    const curLevel = Math.floor((min + max) / 2);
    const totalSolvingTime = getTotalSolvingTime(curLevel);

    // totalSolvingTime 값과 limit를 비교 후 min과 max값을 갱신해 curLevel 범위를 줄여나간다.
    if (totalSolvingTime > limit) {
      min = curLevel + 1;
    } else {
      max = curLevel - 1;
    }
  }

  return min;
}
