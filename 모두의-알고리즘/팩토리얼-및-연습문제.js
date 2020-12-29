//팩토리얼
// function solution(n){
//     if(n <= 1){
//         return 1;
//     }
//     return n * solution(n-1);
// }

// //1~n까지의 합(재귀 호출)
// function solution(n) {
//     if(n <= 1) return 1;
//     return n + solution(n-1);
// }

//숫자 n개 중에서 최댓값 찾기 (재귀 호출)
//a = [17,92,90,47]; max = 47 -> 90 > 92
function solution(a, n){
    let max = 0;
    if(n==1){
        return a[0];
    }
    max = solution(a, n-1);
    //solution(a, 5)  max = soultion(a, 4)
    if(max > a[n-1]){
        return max
    } else {
        return a[n-1];
    }
}