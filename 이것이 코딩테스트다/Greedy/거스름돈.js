function solution(n) {
    let moneys = [500, 100, 50, 10];
    let count = 0;

    for(let money of moneys) {
        count += Math.floor(n / money);
        n = n % money;
    }

    return count;

    // for(let i = 0; i < money.length; i++) {
    //     count += Math.floor(n / money[i]) //2
    //     n = n % money[i];
    // }
}

console.log(solution(1260));