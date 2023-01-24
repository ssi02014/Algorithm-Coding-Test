function solution(s) {
  const stack = [];

  for (let el of s) {
    if (!isNaN(el)) {
      stack.push(Number(el));
    } else {
      const right = +stack.pop();
      const left = +stack.pop();
      let temp = 0;

      if (el === "+") temp = left + right;
      else if (el === "-") temp = left - right;
      else if (el === "*") temp = left * right;
      else temp = Math.floor(left / right);

      stack.push(temp);
    }
  }
  return stack[stack.length - 1];
}

let str = "35-";
console.log(solution(str));
