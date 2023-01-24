function solution(m, product) {
  let result = 0;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < product.length; i++) {
    const iSum = product[i][0] / 2 + product[i][1];
    let count = 1;
    let temp = m - iSum;

    for (let j = 0; j < product.length; j++) {
      const jSum = product[j][0] + product[j][1];

      if (i !== j && temp - jSum < 0) break;
      if (i !== j && temp - jSum >= 0) {
        count++;
        temp = temp - jSum;
      }
    }

    result = Math.max(result, count);
  }
  return result;
}

function lectureSolution(m, product) {
  const n = product.length;
  let result = 0;

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        count++;
      }
    }
    result = Math.max(result, count);
  }
  return result;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
// let arr = [
//   [8, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [12, 1],
// ];
// console.log(solution(41, arr));
// console.log(
//   solution(596, [
//     [6, 331],
//     [4, 251],
//     [8, 675],
//     [5, 214],
//     [10, 735],
//     [5, 996],
//     [9, 609],
//     [9, 371],
//     [8, 377],
//     [5, 707],
//     [7, 907],
//     [6, 433],
//     [9, 737],
//     [8, 796],
//     [4, 265],
//     [3, 484],
//     [8, 488],
//     [8, 191],
//     [9, 232],
//     [4, 195],
//   ])
// );
