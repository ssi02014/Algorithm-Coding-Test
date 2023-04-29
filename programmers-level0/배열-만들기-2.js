function solution(l, r) {
  const arr = [];

  for (let i = l; i <= r; i++) {
    const removedFiveAndZero = i.toString().replace(/[0|5]/g, "");

    if (!removedFiveAndZero.length) {
      arr.push(i);
    }
  }
  return !arr.length ? [-1] : arr;
}
