while (queue.length !== 0) {
    const node = queue.shift(); //[0, 0]
    console.log(node);
    
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
            maze[nx][ny] = maze[x][y] + 1
            queue.push(maze[nx][ny]);
        }
    }
    console.log(maze);
}
return maze[mazeX - 1][mazeY - 1];
