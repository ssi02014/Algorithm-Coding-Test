// 풀이1
function solution1(num, total) {
  const arr = Array.from({ length: num }, (_, i) => i + 1);
  let sum = arr.reduce((acc, cur) => acc + cur, 0);

  while (sum < total) {
    const add = arr.shift() + num;

    arr.push(add);
    sum += add - (add - num);
  }

  while (sum > total) {
    const add = arr.pop() - num;

    arr.unshift(add);
    sum += add - (add + num);
  }

  return arr.sort((a, b) => a - b);
}

// 풀이2
function solution2(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
