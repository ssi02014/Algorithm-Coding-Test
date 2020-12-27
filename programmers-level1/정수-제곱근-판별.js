function solution(n) {
    let answer = -1;
    let sq = Math.floor(Math.sqrt(n));
    if (n / sq === sq) {
        answer = (sq + 1) * (sq + 1);
    }
    return answer
}