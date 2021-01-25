function solution(n) {
    let answer = 0;
    for(let i = 1; i < n + 1; i++) {
        answer += i;
    }
    return answer;
}
console.log(solution(4));