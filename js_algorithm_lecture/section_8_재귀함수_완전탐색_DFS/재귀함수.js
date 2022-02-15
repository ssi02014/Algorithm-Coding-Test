function solution(n) {
  function dfs(target) {
    if (target > n) return;
    else {
      console.log(target);
      dfs(++target);
    }
  }
  dfs(1);
}

function lectureSolution(n) {
  function dfs(t) {
    if (t === 0) return;
    else {
      dfs(t - 1);
      console.log(t);
    }
  }
  dfs(n);
}
solution(3);
lectureSolution(3);

/*
  스택 프레임은 매개변수, 지역변수, 복귀 주소에 대한 정보를 갖고 있다.
  재귀함수는 재귀 호출이 될 때 스택 프레임이 대기하게 된다.
  stack [ dfs(3), dfs(2), dfs(1), dfs(0) ]
*/
