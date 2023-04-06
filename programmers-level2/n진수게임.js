function solution(n, t, m, p) {
  const MAX_RANGE = t * m;
  let text = "";
  let result = "";

  for (let i = 0; i < MAX_RANGE; i++) {
    text += i.toString(n).toUpperCase();
  }

  for (let i = p - 1; i < MAX_RANGE; i += m) {
    result += text[i];
  }

  return result;
}
