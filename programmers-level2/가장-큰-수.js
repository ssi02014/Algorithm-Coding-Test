function solution(numbers) {
  // "(b + a) - (a + b)" 의미가 6과 10이 있을때 610과 106을 만들어서 비교해서 610이 더 크면 6을 앞으로
  const sortedNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));

  return sortedNumbers[0] === "0" ? "0" : sortedNumbers.join("");
}
