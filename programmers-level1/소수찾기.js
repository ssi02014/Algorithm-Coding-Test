function solution(n) { //n은 10
    let answer = 0;
    let arr = [];
    
    for (let i = 0; i <= n; i++) {
        if (i == 1) arr[i] = 0;
        else arr[i] = i;
    }

    for (let i = 2; i * i <= n; i++) { //제곱근까지 반복 4,9
        console.log(i) //i = 2, 3 , 4, 5, ...
    
        if (arr[i] !== 0) {
            for (let j = 2 * i; j <= n; j += i) {           //소수의 배수들은 소수가 아님 //j는 4,6,8,10,6,9, ... //소수가 아닌것을 0으로 표현
                arr[j] = 0;                                  
            }
        }``
    }
    for(let i = 0; i <= n; i++){
        if(arr[i] !== 0) answer++;
    }
    return answer;
}