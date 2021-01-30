const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

//전역 변수
let input = [];
let graph = []; 
let [dfsVisited, bfsVisited] = [[], []];
let [dfsResult, bfsResult] = [[], []]; 

function dfs(startNode) { 
    dfsVisited[startNode] = true; 

    dfsResult.push(startNode);
    for (let i = 1; i < graph.length; i++) { 
        if (graph[startNode][i] === 1 && dfsVisited[i] === false) { 
            dfs(i); 
        } 
    }
    return dfsResult;
}

function bfs(startNode) {
    const needVisitQueue = [];

    needVisitQueue.push(startNode);
    bfsResult.push(startNode);

    while(needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        bfsVisited[node] = true;
        for (let i = 1; i < graph.length; i++) {
            if (graph[node][i] === 1 && bfsVisited[i] === false) {
                bfsVisited[i] = true;
                needVisitQueue.push(i);
                bfsResult.push(i);
            }
        }
    }
    return bfsResult;
}

function adjacencyMatrix(node, input) {
    graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

    for (let i of input) { 
        let [x, y] = i.split(" ").map(el => parseInt(el)); 
        [graph[x][y], graph[y][x]] = [1, 1];
    }
}

//입력 및 출력
rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    // input : ['4 5 1', '1 2', '1 3', '1 4', '2 4', '3 4']
    let [node, trunkLine, startNode] = input[0].split(" ").map((el) => parseInt(el)); 
    input = input.slice(1); 

    dfsVisited = new Array(node + 1).fill(false); 
    bfsVisited = new Array(node + 1).fill(false); 

    adjacencyMatrix(node, input);

    dfs(startNode); 
    bfs(startNode); 

    //결과 출력 
    console.log(dfsResult.join(" "));
    console.log(bfsResult.join(" ")); 
    
    //종료
    process.exit(); 
});


