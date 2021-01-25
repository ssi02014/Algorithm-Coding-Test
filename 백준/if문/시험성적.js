function solution(n) {
    let score = Math.floor(n / 10);
    switch(score) {
      case 10:
        answer = 'A';
        break;
      case 9:
        answer = 'A';
        break;
      case 8:
        answer = 'B';
        break;
      case 7:
        answer = 'C';
        break;
      case 6:
        answer = 'D';
        break;
      default:
        answer = 'F';
    }
    return answer;
  }
  console.log(solution(59));