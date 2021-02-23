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
    function recurison(idx, start) {
        if (start === M) {
            result += `${output.join(' ')}\n`;
            return;
        }

        for (let i = idx; i < N; i++) {
            if (visited[i]) continue;

            visited[i] = true;
            output.push(i + 1);
            recurison(i, start + 1);
            output.pop();
            visited[i] = false;
        }
    }

    recurison(0, 0);
    
    console.log(result);
});