const iceShape = [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

const iceShapeX = iceShape.length;
const iceShapeY = iceShape[0].length;

function solution() {
    return allFreezeIceCube();
}

function freezeIceCube(x, y) {
    if (x < 0 || y < 0 || x >= iceShapeX || y >= iceShapeY) {
        return false;
    } else if(iceShape[x][y] == 0){
        iceShape[x][y] = 2;
        freezeIceCube(x - 1, y); 
        freezeIceCube(x, y - 1);
        freezeIceCube(x + 1, y);
        freezeIceCube(x, y + 1);

        return true;
    } 
    return false;
}

let count = 0;
function allFreezeIceCube() {
    for (let i = 0; i < iceShapeX; i++) {
       for (let j = 0; j < iceShapeY; j++) {
            if (freezeIceCube(i, j)) {
                count++;
            }
       }
   }
   return count;
}

console.log(solution());