function solution(ingredient) {
  const stack = [];

  return ingredient.reduce((acc, cur) => {
    stack.push(`${cur}`);

    if (isHamburger(stack)) {
      stack.splice(-4);
      return acc + 1;
    }
    return acc;
  }, 0);
}

function isHamburger(stack) {
  const lastElement = [4, 3, 2, 1].reduce(
    (acc, cur) => (acc += stack[stack.length - cur]),
    ""
  );
  return lastElement === "1231";
}
