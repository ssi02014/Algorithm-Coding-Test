function solution(n, m) {
    if (n > 0 && m > 0) {
      return 1;
    } else if ( n < 0 && m > 0) {
      return 2;
    } else if (n < 0 && m < 0) {
      return 3;
    }
    return 4;
  }
  console.log(solution(12, 5));
  console.log(solution(-5, 5));
  console.log(solution(-5, -5));
  console.log(solution(9, -13));