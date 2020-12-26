// function solution(n) {
//     let max = n[0];
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] > max) {
//             max = n[i]
//         }
//     }
//     return max;
// }

//가장 큰 수의 인덱스 알려주기
function solution2(n) {
    let max = n[0];
    for (let i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }
    
    return n.indexOf(max);
}