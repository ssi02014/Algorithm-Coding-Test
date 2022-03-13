function solution(c, arr) {
  let result = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function dfs(idx, sum) {
    if (sum > c) return;
    if (idx === n) {
      result = Math.max(result, sum);
    } else {
      dfs(idx + 1, sum + arr[idx]); // 태우는 경우
      dfs(idx + 1, sum); // 안태우는 경우
    }
  }

  dfs(0, 0);

  return result;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
