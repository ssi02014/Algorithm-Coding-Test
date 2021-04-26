function solution(absolutes, signs) {
  const result = [];

  absolutes.forEach((el, i) => {
    if (signs[i] === true) el = el;
    else el = -el;

    result.push(el);
  });

  return result.reduce((a, b) => a + b);
}
