const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];
const result = [];


rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [start, end] = input[0].split(" ").map(Number);

    for (let i = 0; i < end + 1; i++) {
        result[i] = true
    }

    for (let i = 2; i * i < end + 1; i++) { 
        //i = 2, 3, 4
        if (result[i]) {
            for (let j = i * i; j < end + 1; j += i) {
                //j =  4, 6, 8, 9, 10, 12, 14, 15, 16
                result[j] = false;
            }
        }
    }

    for (let i = start; i < end + 1; i++) {
        if (i > 1) {
            if (result[i]) console.log(i);
        }
    }
});