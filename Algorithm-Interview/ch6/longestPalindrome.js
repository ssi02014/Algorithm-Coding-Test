function solution(s) {
  let result = 0;

  if (s.length < 2) return s.length;

  for (let i = 0; i < s.length - 1; i++) {
    const expand1 = expand(s, i, i + 1);
    const expand2 = expand(s, i, i + 2);

    if (result < expand1) result = expand1;
    else if (result < expand2) result = expand2;
  }
  return result;
}

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }
  return s.slice(left + 1, right).length;
}
