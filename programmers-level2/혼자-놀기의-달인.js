function solution(cards) {
  const visited = Array(cards.length).fill(false);
  const groups = Array.from({ length: cards.length }, () => []);

  for (let i = 0; i < cards.length; i++) {
    let curIdx = cards[i] - 1;

    if (visited[curIdx]) continue;

    while (!visited[curIdx]) {
      visited[curIdx] = true;

      curIdx = cards[curIdx] - 1;
      groups[i].push(curIdx + 1);
    }
  }

  groups.sort((a, b) => b.length - a.length);

  return groups[0].length * groups[1].length;
}
