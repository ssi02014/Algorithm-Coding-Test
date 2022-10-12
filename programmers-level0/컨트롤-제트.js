function solution(s) {
  const arr = s.split(" ");
  const stack = [];
  let result = 0;

  arr.forEach((el) => {
    if (el === "Z") {
      result -= stack.pop();
    } else {
      result += +el;
      stack.push(+el);
    }
  });

  return result;
}

function solution(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const cur = arr[mid];

    if (cur < val) {
      min = mid + 1;
    } else if (cur > val) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
