function solution(n, a) {
    const answer = [1, 1];
    const move = a.split('');
    const moveTypes = ['L', 'R', 'U', 'D'];
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    for (let i = 0; i < move.length; i++) {
        for (let j = 0; j < moveTypes.length; j++) { 
            if (move[i] == moveTypes[j]) {
                answer[0] = answer[0] + dx[j];
                answer[1] = answer[1] + dy[j];
            }
        }

        if (answer[0] < 1) {
            answer[0] = 1;
        } else if ( answer[1] < 1) {
            answer[1] = 1;
        } else if ( answer[0] > n) {
            answer[0] = n;
        } else if ( answer[1] > n) {
            answer[1] = n;
        }
    }
    return answer;
}

console.log(solution(5, "RRRRRDDDDDLL"));
console.log(solution(5, "RRRUDD"));
