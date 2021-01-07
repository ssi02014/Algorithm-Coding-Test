function solution(n) {
    for(let i = 0; i < n.length; i++) {
        let temp = 0;
        for(let j = 1; j < n.length - 1; j++) {
            if(n[i] < n[j]) {
                temp = n[i];
                n[i] = n[j];
                n[j] = temp;
            }
        }
    }
    return n
}