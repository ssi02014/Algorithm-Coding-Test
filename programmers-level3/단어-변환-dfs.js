// 모든 경우를 탐색해야하고, 방문 순서에 따라 비용이 달라지기 때문에 백트랙킹 활용
function solution(begin, target, words) {
  const visited = Array(words.length).fill(false);
  let result = 51;

  const checkDiffWord = (curWord, targetWord) => {
    let count = 0;

    for (let i = 0; i < curWord.length; i++) {
      if (curWord[i] !== targetWord[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    return true;
  };

  const dfs = (startNode, targetNode, idx, count) => {
    if (startNode === targetNode) {
      result = Math.min(result, count);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && checkDiffWord(startNode, words[i])) {
        // 백트랙킹
        visited[idx] = true;
        dfs(words[i], target, i, count + 1);
        visited[i] = false;
      }
    }
  };

  for (let i = 0; i < words.length; i++) {
    if (checkDiffWord(begin, words[i])) {
      dfs(words[i], target, i, 1);
    }
  }

  return result > 50 ? 0 : result;
}
