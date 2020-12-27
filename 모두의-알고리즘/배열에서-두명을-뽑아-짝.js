function solution(n) {
    let answer;

    for(let i = 0; i < n.length - 1; i++){
        for(let j = i + 1; j < n.length; j++) {
            console.log(`${n[i]} - ${n[j]}`);
        }
    }
}