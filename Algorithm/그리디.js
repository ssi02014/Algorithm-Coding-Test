const ARRAY_MONEYS = [500, 100, 50, 10];

function solution(change) {
    let coinCount = 0;
    
    for (let money of ARRAY_MONEYS) {
        coinCount += parseInt(change / money); //2, 4, 5, 6
        change %= money; // 260, 60, 10, 0
    }
    return coinCount;
}

console.log(solution(1260));
console.log(solution(5270));