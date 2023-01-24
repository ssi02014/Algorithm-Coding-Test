function solution(arr) {
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  let answer = "NO";
  let flag = 0;

  function DFS(l, sum) {
    if (flag) return;
    if (l === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(l + 1, sum + arr[l]);
      DFS(l + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
