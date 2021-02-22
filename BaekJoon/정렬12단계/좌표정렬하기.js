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

    let location = [];
    for(let i = 0; i < N; i++) {
        location[i] = input[i].split(" ").map(Number);
    }

    let result = '';
    location.sort((a, b) => {
        return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
    }).forEach(a => {
        result += `${a[0]} ${a[1]}\n`;
    });

    console.log(result);
});