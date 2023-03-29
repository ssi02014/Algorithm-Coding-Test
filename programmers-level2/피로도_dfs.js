function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let answer = 0;

  const dfs = (target, count) => {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [requiredFatigue, consumedFatigue] = dungeons[i];

      if (target >= requiredFatigue && !visited[i]) {
        visited[i] = true;
        dfs(target - consumedFatigue, count + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}
