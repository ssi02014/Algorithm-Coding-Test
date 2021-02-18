const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 

    for(let i = 0; i < input.length; i++) {
        const checkPrimeNumber = [];
        const result = [];

        let N = parseInt(input[i]);
        
        for(let i = 0; i < N * 2; i++) {
            checkPrimeNumber[i] = true;
        }

        for (let i = 2; i * i < N * 2; i++) {
            if (checkPrimeNumber[i]) {
                for (let j = i * i; j < N * 2; j += i) {
                    checkPrimeNumber[j] = false;
                }
            }
        }
        
        for (let i = N + 1; i <= N * 2; i++) {
            if (N === 1) result.push(1);
            else if (checkPrimeNumber[i]) result.push(i);
        }

        if (result.length > 0) console.log(result.length);
    }
});