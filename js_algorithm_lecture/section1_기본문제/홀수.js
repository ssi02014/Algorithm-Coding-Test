function solution(arr) {
  let evenList = arr.filter((el) => el % 2 === 1);
  let result = "";

  result += evenList.reduce((acc, cur) => acc + cur) + "\n";
  result += Math.min(...evenList);

  return result;
}

function lectureSolution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let el of arr) {
    if (el % 2) {
      sum += el;
      if (el < min) min = el;
    }
  }

  return `${sum}\n${min}`;
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
console.log(lectureSolution(arr));
