function solution(need, plan) {
  const planList = plan.split("");
  const queue = [];

  while (planList.length) {
    const data = planList.shift();

    if (need.includes(data)) {
      queue.push(data);
    }
  }

  if (queue.join("") !== need) return "NO";
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
