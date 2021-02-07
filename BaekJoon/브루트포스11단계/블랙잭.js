const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [N, M] = input.shift().split(" ").map(Number);
    const cardList = input.shift().split(" ").map(Number);
    
    let result = new Set();
    let sum = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                sum = cardList[i] + cardList[j] + cardList[k];
                if (sum <= M) result.add(sum);
            }
        }
    }
    result = Array.from(result).sort((a, b) => a - b);
    console.log(result[result.length - 1]);
});