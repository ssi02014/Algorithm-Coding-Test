function solution(n) {
    const changePoint = [];
    const maxNum = Math.max(...n);
    let answer = 0;
    
    for (let i = 0; i < n.length; i++) {
        changePoint.push(n[i] / maxNum * 100);
    }
    
    answer = changePoint.reduce((a, b) => a + b);
    return answer / n.length;
}

console.log(solution([40, 80, 60]));
console.log(solution([10, 20, 30]));
console.log(solution([1, 100, 100, 100]));
console.log(solution([1, 2, 4, 8, 16]));
console.log(solution([3, 10]));