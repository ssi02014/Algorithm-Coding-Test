function solution(n) {
    if( n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0)) {
      return 1;
    }
    return 0;
  }

  console.log(solution(2000));
  console.log(solution(1999));
  console.log(solution(2012));
  console.log(solution(1900));