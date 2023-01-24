function solution(size, arr) {
  let result = Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const pos = result.indexOf(arr[i]);

    if (pos === -1) {
      result = lru(size - 1, result);
    } else {
      result = lru(pos, result);
    }
    result[0] = arr[i];
  }

  return result;
}

function lru(length, arr) {
  const result = [...arr];

  for (let i = length; i >= 1; i--) {
    result[i] = result[i - 1];
  }
  return result;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
