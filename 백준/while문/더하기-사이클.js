function solution(n) {
    let temp = n;
    let step = 0;
    let count = 0;

    while(true) {
        count++;

        if (temp < 10) {
            step = temp % 10;
        } else {
            step = Math.floor(temp / 10) + (temp % 10);
        }
        
        temp = (temp % 10).toString() + (step % 10).toString();
        temp = Number(temp);

        if (temp === n) {
            return count;
        }
    }
}
console.log(solution(26));