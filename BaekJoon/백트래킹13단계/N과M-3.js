const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const [N, M] = input[0].split(" ").map(Number);
    const visited = new Array(N);
    const output = [];

    let result = '';

    function recurison(start) {
        if (start === M) {
            result += `${output.join(' ')}\n`;
            return;
        }
        
        for (let i = 0; i < N; i++) {
            if (!visited[i]) {
                output.push(i + 1);
                recurison(start + 1);
                console.log(output);
                output.pop();
            }
        }
    }

    recurison(0);
    console.log(result);
});