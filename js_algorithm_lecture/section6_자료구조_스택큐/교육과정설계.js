function solution(need, plan) {
  let planList = plan.split("");
  let queue = [];

  while (planList.length) {
    const data = planList.shift();

    if (need.includes(data)) {
      queue.push(data);
    }
  }

  if (queue.join("") !== need) return "NO";
  return "YES";
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
