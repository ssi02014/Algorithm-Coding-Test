function solution(a, b) {
  let result = "";

  for (let i = 0; i < a.length; i++) {
    result += game(a[i], b[i]);
  }

  return result;

  function game(a, b) {
    if (a === b) return "D";
    else if (a === 1 && b === 3) return "A";
    else if (a === 2 && b === 1) return "A";
    else if (a === 3 && b === 2) return "A";
    else return "B";
  }
}

function lectureSolution(a, b) {}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
