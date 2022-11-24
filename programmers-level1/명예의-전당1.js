function solution(k, score) {
  const hallOfFame = [];

  return score.reduce((acc, cur) => {
    hallOfFame.push(cur);

    if (hallOfFame.length > k) {
      hallOfFame.sort((a, b) => b - a).pop();
    }

    return [...acc, Math.min(...hallOfFame)];
  }, []);
}
