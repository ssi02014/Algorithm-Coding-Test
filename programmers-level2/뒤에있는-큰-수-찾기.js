function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];

  numbers.forEach((number, i) => {
    while (stack && numbers[stack.at(-1)] < number) {
      const deletedStackLastIdx = stack.pop();

      result[deletedStackLastIdx] = numbers[i];
    }
    stack.push(i);
  });

  return result;
}
