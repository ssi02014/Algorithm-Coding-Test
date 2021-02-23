function solution(n) {
    const fibonaciList = [];
    
    let result = 0;
    let sum = 0;
    
    for (let i = 0; i <= n; i++) {
        if (i <= 1) fibonaciList.push(i)
        else {
            sum = fibonaciList[i - 2] + fibonaciList[i - 1];
            fibonaciList.push(sum % 1234567);
        }
    }
    return result = fibonaciList[n]
}