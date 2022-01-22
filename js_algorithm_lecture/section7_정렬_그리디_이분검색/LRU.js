function solution(size, arr) {
  let result = Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const pos = result.indexOf(el);

    if (pos === -1) {
      result = lru(size - 1, result);
    } else {
      result = lru(pos, result);
    }
    result[0] = el;
  }

  return result;
}

function lru(size, arr) {
  const result = [...arr];

  for (let j = size; j >= 1; j--) {
    result[j] = result[j - 1];
  }
  return result;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
