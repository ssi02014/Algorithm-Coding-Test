function solution(numbers) {
    let answer = 0;
    let nums = new Set();
    numbers = numbers.split("");
    
    makeNumber('', numbers);
    
    function isPrime(n) {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if ( n % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    function makeNumber(current, numbers) {
        if (current.length > 0) {
            
            if (!nums.has(Number(current))) {
                nums.add(Number(current));
                
                if (isPrime(Number(current))) {
                    answer++;
                }
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            let tempArr = numbers.slice(0);
            
            tempArr.splice(i, 1);
            makeNumber(current + numbers[i], tempArr);
        }
    }
    return answer;
}