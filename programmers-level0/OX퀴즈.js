function solution(quiz) {
  return quiz.map((el) => {
    const [formula, result] = el.split(" = ");
    const [operand1, operator, operand2] = formula
      .split(" ")
      .map((el) => (isNaN(+el) ? el : +el));
    const temp =
      operator === "-" ? operand1 + operand2 * -1 : operand1 + operand2;

    return temp === +result ? "O" : "X";
  });
}
