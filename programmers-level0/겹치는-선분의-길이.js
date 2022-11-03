function solution(lines) {
  const visitedObj = {};
  let result = 0;

  lines.forEach(([x, y]) => {
    const [min, max] = x < y ? [x, y] : [y, x];

    for (let i = min; i < max; i++) {
      visitedObj[i] = (visitedObj[i] || 0) + 1;

      if (visitedObj[i] === 2) result++;
    }
  });

  return result;
}

// 실패 솔루션 (테스트 케이스1, 9 실패)
// function solution(lines) {
//   const commonLines = [];
//   let [x, y] = [101, -101];

//   lines.forEach((line) => line.sort((a, b) => a - b));

//   for (let i = 0; i < lines.length; i++) {
//     for (let j = i + 1; j < lines.length; j++) {
//       if (lines[i][1] > lines[j][0]) {
//         const maxX = Math.max(lines[i][0], lines[j][0]);
//         const minY = Math.min(lines[i][1], lines[j][1]);

//         commonLines.push([maxX, minY]);
//       }
//     }
//   }

//   if (commonLines.length < 1) return 0;
//   commonLines.forEach((el) => {
//     x = Math.min(x, el[0]);
//     y = Math.max(y, el[1]);
//   });

//   return y - x;
// }
