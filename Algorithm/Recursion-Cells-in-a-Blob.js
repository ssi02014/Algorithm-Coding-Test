const grid = [
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1, 1],
];
const N = grid.length;

let count = 0;
function solution() {
    findBlock(7, 7);
    return count;
}

function findBlock(x, y) {
    if(x < 0 || y < 0 || x >= N || y >= N) {
        return false;
    } else if (grid[x][y] !== 1) {
        return false;
    } else {
        grid[x][y] = 2;
        count++;
        if ((findBlock(x + 1, y) 
            || (findBlock(x, y + 1))
            || (findBlock(x + 1, y + 1))
            || (findBlock(x + 1, y - 1))
            || (findBlock(x, y - 1))
            || (findBlock(x - 1, y - 1))
            || (findBlock(x - 1, y))
            || (findBlock(x - 1, y + 1)))) {
                return true;
        }
    }
}
console.log(solution());