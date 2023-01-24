function solution(need, plan) {
  const planList = plan.split("");
  const stack = [];

  while (planList.length) {
    const data = planList.shift();

    if (need.includes(data)) {
      stack.push(data);
    }
  }

  if (stack.join("") !== need) return "NO";
  return "YES";
}

function lectureSolution(need, plan) {
  const queue = need.split("");

  for (let el of plan) {
    if (queue.includes(el)) {
      if (el !== queue.shift()) return "NO";
    }
  }

  return queue.length ? "YES" : "NO";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
