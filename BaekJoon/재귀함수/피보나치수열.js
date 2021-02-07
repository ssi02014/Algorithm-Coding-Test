const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];


rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = parseInt(input.shift());

    function fibonaci(a) {
        let answer = 0;
        if (a <= 1) return a;
        return answer = fibonaci(a-1) + fibonaci(a-2);
    }

    console.log(fibonaci(N));
});