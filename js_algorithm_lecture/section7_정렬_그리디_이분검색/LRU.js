function solution(size, arr) {
  let result = Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let pos = -1;

    for (let j = 0; j < size; j++) {
      if (el === arr[j]) pos = j;
    }

    if (pos === -1) {
      for (let j = size - 1; j >= 1; j--) {
        result[j] = result[j - 1];
      }
    } else {
      for (let j = pos; j >= 1; j--) {
        result[j] = result[j - 1];
      }
    }
    result[0] = el;
  }

  console.log(result);
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
solution(5, arr);
