function solution(n) {
    const arr = [];
    
    for (let i = 0; i < n + 1; i++) {
        arr.push(true);
    }

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
        console.log(arr);
    }
    
  	// 0과 1은 소수가 아니므로 false 값으로 바꿔준다.
    arr.splice(0, 2, false, false);
    
  	// 배열에서 true인 값만 걸러내고, true인 값의 개수를 출력한다.
    const result = arr.filter(value => {
        return value === true;
    })
    
    return result.length;
}

console.log(solution(10));