function solution(t, p) {
  const targetNum = +p;
  let tempStr = t.slice(0, p.length);
  let result = tempStr <= targetNum ? 1 : 0;

  for (let i = p.length; i < t.length; i++) {
    tempStr = tempStr.slice(1) + t[i];

    if (tempStr <= targetNum) result++;
  }

  return result;
}
