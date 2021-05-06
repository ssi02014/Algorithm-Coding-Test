function solution(s) {
  const S_LENGTH = s.length;
  const middle = Math.floor(S_LENGTH / 2);

  if (S_LENGTH % 2) {
    return s.slice(middle, middle + 1);
  }

  return s.slice(middle - 1, middle + 1);
}
