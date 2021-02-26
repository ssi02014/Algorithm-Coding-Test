const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = parseInt(input[0]);
    const M = parseInt(input[1]);
    const result = [];

    let perfectSquareNum = 0;
    
    for (let i = 1; i * i <= M; i++) {
        perfectSquareNum = i * i;
        if (perfectSquareNum >= N && perfectSquareNum <= M) {
            result.push(perfectSquareNum);
        }
    }

    if (result.length === 0) console.log(-1);
    else {
        console.log(result.reduce((a, b) => a + b));
        console.log(Math.min(...result));
    }
});