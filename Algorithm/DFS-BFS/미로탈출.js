const maze = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
]
const mazeX = maze.length;
const mazeY = maze[0].length;

function solution() {
    findMazePath(0, 0);
    return maze[mazeX - 1][mazeY - 1];
}

function findMazePath(x, y) {

    let visitedQueue = [];   //탐색이 끝난 노드(queue)
    let needVisitQueue = []; //탐색해야 할 노드(queue)

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let nx, ny;
    nx = ny = 0;

    needVisitQueue.push([x, y]);
    
    while (needVisitQueue.length !== 0) {
        const node = needVisitQueue.shift(); //[0, 0]
        x = node[0];
        y = node[1];
        
        for(let i = 0; i < 4; i++) {

            nx = x + dx[i];
            ny = y + dy[i];

            if(nx < 0 || ny < 0 || nx >= mazeX || ny >= mazeY) {
                continue;
            }
            else if (maze[nx][ny] === 0) {
                continue;
            }
            if (maze[nx][ny] === 1) {
                maze[nx][ny] = maze[x][y] + 1;
                visitedQueue.push(node);
                needVisitQueue.push([nx, ny]);
            }
        }
        console.log(maze);
    }
    return maze[mazeX - 1][mazeY - 1];
    }
    
console.log(solution());