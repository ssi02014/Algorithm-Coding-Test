function solution(enter, leave) {
  const result = Array.from(Array(enter.length).fill(0));
  const stack = [];
  let idx = 0;

  leave.map((el) => {
    while (!stack.includes(el)) {
      stack.push(enter[idx]);
      idx++;
    }
    stack.splice(stack.indexOf(el), 1);

    stack.map((entered) => result[entered - 1]++);
    result[el - 1] += stack.length;
  });

  return result;
}
