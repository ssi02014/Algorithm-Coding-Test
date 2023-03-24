function solution(park, routes) {
  const parkBoard = park.map((el) => el.split(""));
  const height = park.length;
  const width = park[0].length;
  const directionMappingObj = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  const rangeCheck = (y, x) => {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return false;
    }
    return true;
  };

  const getCurrentPosition = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (parkBoard[i][j] === "S") return [i, j];
      }
    }
  };

  const getNextPosition = (directionType, move, x, y) => {
    const [dx, dy] = directionMappingObj[directionType];

    for (let i = 0; i < move; i++) {
      const [nx, ny] = [x + dx, y + dy];

      if (!rangeCheck(nx, ny) || parkBoard[nx][ny] === "X") {
        return [-1, -1];
      }
      [x, y] = [nx, ny];
    }

    return [x, y];
  };

  for (const route of routes) {
    const [directionType, move] = route.split(" ");
    const [curX, curY] = getCurrentPosition();
    const [nx, ny] = getNextPosition(directionType, +move, curX, curY);

    if (nx === -1) continue;

    parkBoard[curX][curY] = "O";
    parkBoard[nx][ny] = "S";
  }

  return getCurrentPosition();
}
