// 효율성 실패1
// function solution(price) {
//     const result = [];

//     for (let i = 0; i < price.length; i++) {
//         let count = 1;
//         let flag = false;

//         for (let j = i + 1; j < price.length; j++) {
//             if (price[j] > price[i]) {
//                 flag = true;
//                 result.push(count);
//                 break;
//             } else {
//                 count += 1;
//             }
//         }
//         if (!flag) result.push(-1);
//     }

//     return result;
// }

// 효율성 실패2
function solution(price) {
  const arbitrageList = Array(price.length).fill(-1);
  return arbitrageList.map((el, i) => {
    for (let j = i + 1; j < price.length; j++) {
      if (price[i] < price[j]) return j - i;
    }
    return el;
  });
}
