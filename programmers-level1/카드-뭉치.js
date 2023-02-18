function solution(cards1, cards2, goal) {
  let [i, j] = [0, 0];

  for (const word of goal) {
    if (cards1[i] === word) i++;
    if (cards2[j] === word) j++;
  }

  if (i + j === goal.length) return "Yes";
  return "No";
}
