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

/**
 * 시간복잡도 O(N) 풀이
 * 남은 일자를 계산해서 미리 구하고, 최대 남은 일자를 갱신하면서 풀이 접근방식
 */
function solution2(progresses, speeds) {
  const leftDays = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });
  const result = [];
  let maxLeftDay = leftDays[0];
  let count = 0;

  for (let i = 0; i < progresses.length; i++) {
    if (leftDays[i] <= maxLeftDay) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxLeftDay = leftDays[i];
    }
  }
  result.push(count); // 반복문 나오기 직전 count한 값은 result에 추가되지 않기 때문에 직접 한번 더 호출해야 함
  return result;
}
