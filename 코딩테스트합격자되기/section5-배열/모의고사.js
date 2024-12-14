/**
 * 프로그래머스 레벨1 모의고사
 * https://school.programmers.co.kr/learn/courses/30/lessons/42840
 */
function solution(answers) {
  const result = [];
  const points = [];
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  patterns.forEach((pattern) => {
    let point = 0;

    answers.forEach((answer, i) => {
      if (answer === pattern[i % pattern.length]) {
        point++;
      }
    });

    points.push(point);
  });

  const maxPoint = Math.max(...points);
  ㄱ;

  points.forEach((point, i) => {
    if (point === maxPoint) {
      result.push(i + 1);
    }
  });

  return result;
}
