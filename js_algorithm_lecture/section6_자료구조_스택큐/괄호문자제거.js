function solution(s) {
  const stack = [];
  let result = "";

  for (let el of s) {
    if (el === "(") stack.push(el);
    else if (el === ")") stack.pop();
    else {
      if (stack.length) continue;
      else result += el;
    }
  }
  return result;
}

function lectureSolution(s) {
  const stack = [];

  for (let el of s) {
    if (el === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(el);
    }
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); // EFLM
