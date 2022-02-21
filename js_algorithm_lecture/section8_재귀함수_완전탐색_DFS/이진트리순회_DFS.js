// 전위 순회
function solution1(n){
  let result = [];
  function dfs(n) {
    if(n > 7) {
      // 멈추는 지점
      return;
    } else {
      // 재귀가 뻗는 지점
      result.push(n);
      dfs(n * 2);
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
  return result;
}

// 중위 순회
function solution2(n) {
  let result = [];
  function dfs(n) {
    if(n > 7) {
      // 멈추는 지점
      return;
    } else {
      // 재귀가 뻗는 지점
      dfs(n * 2);
      result.push(n);
      dfs(n * 2 + 1);
    }
  }
  dfs(n);
  return result;
}

// 후위 순회
function solution3(n) {
  let result = [];
  function dfs(n) {
    if(n > 7) {
      // 멈추는 지점
      return;
    } else {
      // 재귀가 뻗는 지점
      dfs(n * 2);
      dfs(n * 2 + 1);
      result.push(n);
    }
  }
  dfs(n);
  return result;
}


console.log(solution1(1));
console.log(solution2(1));
console.log(solution3(1));