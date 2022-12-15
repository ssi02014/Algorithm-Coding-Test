// 우박수열
const getHailSequence = (k) => {
  const result = [k];

  while (k > 1) {
    if (k % 2 === 0) k /= 2;
    else k = k * 3 + 1;

    result.push(k);
  }

  return result;
};

// 사다리꼴 넓이
const getTrapezoidAreas = (hailSequence) => {
  const result = [];

  for (let i = 0; i < hailSequence.length - 1; i++) {
    // (밑변 + 윗변) * 높이 / 2
    const [bottomSide, topSide] = [hailSequence[i], hailSequence[i + 1]];

    result.push(((bottomSide + topSide) * 1) / 2);
  }

  return result;
};

// 누적합
const getCumulativeSum = (areas, x, y) => {
  let result = 0;

  for (let i = x; i < y; i++) {
    result += areas[i];
  }

  return result;
};

function solution(k, ranges) {
  const hailSequence = getHailSequence(k);
  const trapezoidAreas = getTrapezoidAreas(hailSequence);

  return ranges.map((range) => {
    const [x, y] = [range[0], trapezoidAreas.length + range[1]];

    if (x > y) return -1;
    return getCumulativeSum(trapezoidAreas, x, y);
  });
}
