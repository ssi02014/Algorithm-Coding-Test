let maze = [
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 0],
    ];
let N = maze.length;

function solution() {
    findMazePath(0, 0);
    return maze;
}

function findMazePath(x, y) {
    if(x < 0 || y < 0 || x >= N || y >= N) {
        return false;
    } else if (maze[x][y] !== 0) {
        return false;
    } else if (x === N - 1 && y === N - 1) {
        maze[x][y] = 3;
        return true;
    } else {
        maze[x][y] = 3;
        if ((findMazePath(x - 1, y)
        || (findMazePath(x, y - 1))
        || (findMazePath(x + 1, y))
        || (findMazePath(x, y + 1)))) {
            return true;
        }
    }
    maze[x][y] = 2;
    return false;
}
console.log(solution());