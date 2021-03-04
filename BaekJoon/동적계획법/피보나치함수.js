const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = parseInt(input.shift());

    // function fibonacci(n, result) {
    //     result[0][0] = 1;
    //     result[0][1] = 0;
    //     result[1][0] = 0;
    //     result[1][1] = 1;
        
    //     if(n >= 2x) {
    //         for(let i = 2; i <= n; i++) {
    //             result[i][0] = result[i - 1][0] + result[i - 2][0];
    //             result[i][1] = result[i - 1][1] + result[i - 2][1];
    //         }
    //     }
    //     console.log(result[n][0], result[n][1]);
    // }

    function fibonacci(n, result) {
        result[0] = 0;
        result[1] = 1;

        if (n >= 2) {
            for(let i = 2; i <= n; i++) {
                result[i] = result[i - 1] + result[i - 2];
            }
        }
        if (n === 0) console.log(1, 0);
        else console.log(result[n - 1], result[n]);
    }

    for(let i = 0; i < N; i++) {
        const t = parseInt(input[i]);
        const result = Array.from(Array(t + 2));
        
        fibonacci(t, result);
    }
    
});