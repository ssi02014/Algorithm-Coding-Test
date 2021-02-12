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
    let count = 3;

    while(N !== 1) {
        if (N % 2 === 0) {
            N = parseInt(N / 2);
            console.log(2);
        }

        if (N % 3 === 0) {
            N = parseInt(N / 3);
            console.log(3);
        }

        if (N % 2 !== 0 && N % 3 !== 0) {
            count++;
            if (N % count === 0) {
                N = parseInt(N / count);
                console.log(count);
                //post이슈
            }
        }
    }
});