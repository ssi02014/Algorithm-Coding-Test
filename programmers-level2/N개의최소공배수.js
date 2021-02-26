function solution(arr) {
    // 최대공약수 구하기
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    
    // reduce 사용 2 => 6 => 24 => 168
    return arr.reduce((a, b) => a * b / gcd(a, b));
}

// function solution() {
//     const gcd = (a, b) => b ? gcd(b, a % b) : a;
//     console.log(result);
// }