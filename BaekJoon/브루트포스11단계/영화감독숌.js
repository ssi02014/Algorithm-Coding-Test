const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = input[0];
    
    let movieTitle = 665;
    while (N > 0) {
        movieTitle++;

        if (movieTitle.toString().includes('666')) {
            N--;
        }
    }
    console.log(movieTitle);
});