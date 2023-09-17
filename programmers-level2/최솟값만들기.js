function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, idx) => {
    return (acc += cur * sortedB[idx]);
  }, 0);
}
