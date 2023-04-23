function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    const shouldAppendLastItem = !stk.length || stk.at(-1) < arr[i];

    if (shouldAppendLastItem) {
      stk.push(arr[i++]);
      continue;
    }

    stk.pop();
  }

  return stk;
}
