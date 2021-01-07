function solution(n) {
    let answer = 0;
    if (n <= 1) {
        return n;
    }
    return answer = solution(n - 2) + solution(n - 1);
}