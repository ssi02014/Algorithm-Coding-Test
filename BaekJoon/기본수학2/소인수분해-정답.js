const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

//시간 초과 문제

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = parseInt(input[0]);
    let count = 2;

    while(N !== 1) {
        if (N % count === 0) {
            console.log(count);
            N = parseInt(N / count);
        } else {
            count++;
        }
    }
});