function solution(n, m) {
    let answerHour = n;
    let answerMin = m - 45;
    let answer = '';

    if (answerMin < 0) {
      answerHour--;
      answerMin = 60 + answerMin;
      
      if (answerHour < 0) {
        answerHour = 23;
      }
    }

    return answer = `${answerHour} ${answerMin}`
  }
  
  console.log(solution(10, 10));
  console.log(solution(0, 30));
  console.log(solution(23, 40));
  console.log(solution(1, 20));