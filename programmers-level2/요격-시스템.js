function solution(targets) {
  let minRange = 0;
  let result = 0;

  targets.sort((a, b) => a[0] - b[0]);

  for (const target of targets) {
    const [start, end] = target;

    if (end < minRange) {
      minRange = end;
      continue;
    }
    if (start >= minRange) {
      result++;
      minRange = end;
    }
  }

  return result;
}
