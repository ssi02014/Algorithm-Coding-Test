function solution(order) {
  const subContainer = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    subContainer.push(i);

    while (subContainer.length > 0 && subContainer.at(-1) === order[idx]) {
      subContainer.pop();
      idx++;
    }
  }

  return idx;
}
