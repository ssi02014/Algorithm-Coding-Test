function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length) {
      if (!stk.length) {
        stk.push(arr[i]);
        continue;
      }

      if (stk.at(-1) === arr[i]) {
        stk.pop();
        continue;
      }

      stk.push(arr[i]);
    }
  }

  return !stk.length ? [-1] : stk;
}
