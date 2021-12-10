// 효율성 탈락1
// function solution(estimates, k) {
//     let result = [];
//     for (let i = 0; i < estimates.length; i++) {
//         let sum = 0;
//         for (let j = i; j < i + k; j++) {
//             if (j >= estimates.length) break;
//             else sum += estimates[j];
//         }
//         result.push(sum);
//     }
//     return Math.max(...result);
// }

// 효율성 탈락2
// function solution(estimates, k) {
//     let maxEstimates = 0;

//     for(let i = 0; i <= estimates.length - k; i++) {
//         let temp = [];

//         temp = estimates.slice(i, i + k).reduce((acc, cur) => acc + cur);
//         maxEstimates = Math.max(maxEstimates, temp);
//     }

//     return maxEstimates;
// }

// 효율성 탈락3
function solution(estimates, k) {
  let maxNum = 0;

  for (let i = 0; i <= estimates.length - k; i++) {
    const sum = estimates.slice(i, i + k).reduce((acc, cur) => acc + cur);
    if (maxNum < sum) maxNum = sum;
  }

  return maxNum;
}
