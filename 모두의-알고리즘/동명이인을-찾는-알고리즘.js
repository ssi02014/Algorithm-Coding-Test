function solution(n) {
    let answer = [];
    for(let i = 0; i < n.length - 1; i++) {
        for(let j = i + 1; j < n.length; j++) {
            if(n[i] === n[j]){
                answer.push(n[i]);
            }
        }
    }
    return answer;
}