const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let list = input.slice(1).map(Number);

    let sortList = list.sort((a, b) => a - b);

    console.log(sortList.join('\n'));
});