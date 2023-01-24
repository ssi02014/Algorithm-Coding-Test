function solution(n, k) {
  const result = [];
  const princes = Array.from(Array(n), (v, i) => i + 1);
  let count = 0;

  while (result.length < n) {
    count++;

    if (count === k) {
      count = 0;
      result.push(princes.shift());
    } else {
      princes.push(princes.shift());
    }
  }

  return result[result.length - 1];
}

function lectureSolution(n, k) {
  const princes = Array.from(Array(n), (v, i) => i + 1);
  let result = 0;

  while (princes.length) {
    for (let i = 1; i < k; i++) {
      princes.push(princes.shift());
    }
    princes.shift();

    if (princes.length === 1) result = princes.shift();
  }

  return result;
}

console.log(solution(8, 3));
console.log(lectureSolution(8, 3));
