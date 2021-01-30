const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const [dx, dy] = [[1, -1, 0, 0], [0, 0, 1, -1]];
let input = [];
let map = [];
let mapHeight, mapWidth;
mapHeight = mapWidth = 0;

function bfs(x, y) {
    let needVisitQueue = [];

    let nx, ny;
    nx = ny = 0;

    needVisitQueue.push([x, y]);

    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift();
        [x, y] = node;

        for(let i = 0; i < dx.length; i++) {
            nx = x + dx[i];
            ny = y + dy[i];

            if(nx < 0 || ny < 0 || nx >= mapHeight || ny >= mapWidth) continue;
            if(map[nx][ny] === 0) continue;
            if(map[nx][ny] === 1) {
                map[nx][ny] = map[x][y] + 1;
                needVisitQueue.push([nx, ny]);
            }
        }
    }
    return map[mapHeight - 1][mapWidth - 1];
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    [mapHeight, mapWidth] = input[0].split(" ").map(el => parseInt(el));
    input = input.slice(1);

    map = Array.from(Array(mapHeight), () => new Array(mapWidth));
    for(let i = 0; i < mapHeight; i++) {
        map[i] = input[i].split("").map(el => parseInt(el));
    };

    console.log(bfs(0, 0));
});