const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let [a, b, v] = input.shift().split(" ").map(Number);
    let count = 0;

    /* 
        (시간 초과)
        while(true) {
            count++;
            if(result >= v) {
                break;
            }
            result += a;
            result -= b;
        }
    */

    count = Math.ceil((v - b) / (a - b));

    console.log(count);
});