function solution(numbers) {
  const result = [];

  for (const curNum of numbers) {
    const curBinary = "0" + curNum.toString(2);
    if (curNum % 2 === 0) {
      result.push(curNum + 1);
      continue;
    }

    for (let i = curBinary.length - 1; i >= 0; i--) {
      if (curBinary[i] === "0") {
        const convertedBinary =
          curBinary.slice(0, i) + "10" + curBinary.slice(i + 2);

        result.push(parseInt(convertedBinary, 2));
        break;
      }
    }
  }
  return result;
}
