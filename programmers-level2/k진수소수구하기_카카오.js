function solution(n, k) {
  const convertDecimal = n.toString(k);
  const decimalList = convertDecimal.split("0");
  let result = 0;

  decimalList.forEach((decimal) => {
    const num = +decimal;

    if (num > 1 && checkDecimal(num)) {
      result++;
    }
  });

  return result;
}

function checkDecimal(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
