/**
 * 프로그래머스 레벨1 카드 뭉치
 * tip: 주어진 speed 값으로 각 작업 진도를 올려주고, 앞에서 100 이상이면 작업 큐에서 제거하면 됌.
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/159994
 */

// O(N^2)
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    const goalItem = goal[i];
    const card1Item = cards1[0];
    const card2Item = cards2[0];

    if (goalItem === card1Item) {
      cards1.shift();
      continue;
    }

    if (goalItem === card2Item) {
      cards2.shift();
      continue;
    }

    return "No";
  }
  return "Yes";
}

// 훨씬 더 좋은 풀이
// O(N)
function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (const word of goal) {
    if (word === cards1[i]) {
      i++;
    }

    if (word === cards2[j]) {
      j++;
    }
  }

  return i + j === goal.length ? "Yes" : "No";
}
