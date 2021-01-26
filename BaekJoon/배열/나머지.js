function solution(n) {
    const temp = new Set();
    let answer = [];

    // for (let i = 0; i < n.length; i++) {
    //     remainder = n[i] % 42;
    //     temp.add(remainder);
    // }

    n.forEach(el => temp.add(el % 42));

    answer = Array.from(temp);
    return answer.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(solution([42, 84, 252, 420, 840, 126, 42, 84, 420]));
console.log(solution([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]));