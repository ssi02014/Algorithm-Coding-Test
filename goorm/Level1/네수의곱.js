const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const list = input[0].split(" ").map(Number);
    let multi = 1;

    for (let i = 0; i < list.length; i++) {
        multi *= list[i];
    }
    console.log(multi);
});