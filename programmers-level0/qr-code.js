function solution(q, r, code) {
  return Array.from(code, (_, idx) => idx % q).reduce((acc, cur, idx) => {
    if (cur === r) acc += code[idx];
    return acc;
  }, "");
}
