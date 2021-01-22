function solution(n) {
    let money = [500, 100, 50, 10];
    let count = 0;

    for(let i = 0; i < money.length; i++) {
        count += Math.floor(n / money[i]) //2
        n = n % money[i];
    }
    return count;
}

console.log(solution(1260));