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
    let primeFactor = [];
    let count = 3;

    if (N === 1) return; 

    while(N !== 1) {
        if (N % 2 === 0) {
            N = parseInt(N / 2);
            primeFactor.push(2);
        }

        if (N % 3 === 0) {
            N = parseInt(N / 3);
            primeFactor.push(3);
        }

        if (N % 2 !== 0 && N % 3 !== 0) {
            count++;
            if (N % count === 0) {
                N = parseInt(N / count);
                primeFactor.push(count);
            }
        }
    }

    let result = primeFactor.sort((a, b) => a - b);

    console.log(result.join('\n'));
});