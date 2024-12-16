/**
 * 프로그래머스 레벨2 기능 개발 (재풀이)
 * tip: 주어진 speed 값으로 각 작업 진도를 올려주고, 앞에서 100 이상이면 작업 큐에서 제거하면 됌.
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */
function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    let count = 0;

    for (let i = 0; i < speeds.length; i++) {
      progresses[i] += speeds[i];
    }

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    count > 0 && result.push(count);
  }
  return result;
}
