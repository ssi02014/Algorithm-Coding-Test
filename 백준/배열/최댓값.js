function solution(n) {
    const maxNum = Math.max(...n);
    const maxNumIndex = n.indexOf(maxNum) + 1;

    const answer = `최댓값: ${maxNum}, index: ${maxNumIndex}`;

    return answer;
}
console.log(solution([3, 29, 38, 12, 57, 74, 40, 85, 61]));