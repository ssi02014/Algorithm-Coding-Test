/**
 * 프로그래머스 레벨1 실패율
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42889
 */
function solution(N, stages) {
  const failRates = [];
  let totalCount = stages.length;

  for (let i = 1; i <= N; i++) {
    const stageCount = stages.filter((stage) => stage === i).length;
    const failRate = stageCount / totalCount;

    totalCount -= stageCount;
    failRates.push({ stage: i, rate: failRate });
  }

  return failRates
    .sort((a, b) => b.rate - a.rate || a.stage - b.stage)
    .map((el) => el.stage);
}
