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

    function fibonaci(n) {
        let answer = 0;
        if (n <= 1) return n;
        return answer = fibonaci(n - 1) + fibonaci(n - 2);
    }

    console.log(fibonaci(N));
});