// function solution(n){
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//         answer += i;
//     }
//     return answer;
// }
function solution(n){
    let answer = 0;
    answer = n * (n + 1) / 2;
    return answer;
}