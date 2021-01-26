function solution(n, m) {
    if (n > m) {
      return '>';
    } else if( n < m) {
      return '<';
    } else {
      return '=';
    }
  }
  console.log(solution(1, 2));
  console.log(solution(10, 2));
  console.log(solution(5, 5));