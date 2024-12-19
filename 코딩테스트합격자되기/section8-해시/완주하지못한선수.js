/**
 * 프로그래머스 레벨1 완주하지 못한 선수
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42576
 */
// O(N + M)
function solution(participant, completion) {
  const completionStatus = {};

  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];

    completionStatus[name] = (completionStatus[name] || 0) + 1;
  }

  for (let i = 0; i < completion.length; i++) {
    const name = completion[i];

    completionStatus[name] = completionStatus[name] - 1;
  }

  for (const name in completionStatus) {
    if (completionStatus[name] > 0) return name;
  }
}
