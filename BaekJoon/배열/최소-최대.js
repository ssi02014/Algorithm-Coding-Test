function solution(n) {
    // const minNum = Math.min(...n);
    // const maxNum = Math.max(...n);
    // const answer = `최솟값: ${minNum}, 최댓값: ${maxNum}`;

    const sortList = n.sort((a, b) => a - b);
    const minNum = sortList[0];
    const maxNum = sortList[n.length - 1];
    const answer = `최솟값: ${minNum}, 최댓값: ${maxNum}`;

    return answer;
}
console.log(solution([20, 10, 35, 30, 7]));
console.log(solution([2, 10, 7, 15, 24]));