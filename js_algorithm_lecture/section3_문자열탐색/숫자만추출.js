function solution(str) {
  let result = "";

  for (let el of str) {
    if (!isNaN(el)) {
      result += el;
    }
  }
  return Number(result);
}

function lectureSolution(str) {
  let result = "";

  for (let el of str) {
    if (!isNaN(el)) {
      result = result * 10 + Number(el);
    }
  }
  return result;
}

let str = "g0e00n2T0s8eSoft";
console.log(lectureSolution(str));
