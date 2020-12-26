function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer += i * i;
    }
    return answer;
}