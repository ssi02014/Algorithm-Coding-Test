function solution(sizes) {
  return sizes.reduce(
    (acc, cur) => {
      const [a, b] = cur.sort((a, b) => b - a);
      if (acc[0] < a) acc[0] = a;
      if (acc[1] < b) acc[1] = b;
      acc[2] = acc[0] * acc[1];

      return acc;
    },
    [0, 0, 0]
  )[2];
}
