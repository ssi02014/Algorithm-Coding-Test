function solution(n) {
    let answer = ``;
    for(let i = 1; i < 10; i++) {
        answer = `${n} * ${i} = ${n * i}`;
        console.log(answer);
    }
  }
  solution(2);
  solution(3);
  solution(4);