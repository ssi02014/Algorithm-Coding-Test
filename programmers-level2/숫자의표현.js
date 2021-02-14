function solution(n) {
    let sum = 0;
    let count = 0;
    
    function sequentialAdd(a) {
        sum = 0;
        
        for (let i = a; i < n + 1; i++) {
            sum += i;

            if (sum === n) {
                count++;
                break;
            } 
            if (sum > n) break;
        }
    }
    
    for (let i = 1; i < n + 1; i++) {
        sequentialAdd(i);
    }
    
    return count;
}