function solution(wallpaper) {
  const result = [50, 50, 0, 0];
  const height = wallpaper.length;
  const width = wallpaper[0].length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (wallpaper[i][j] === "#") {
        result[0] = Math.min(result[0], i);
        result[1] = Math.min(result[1], j);
        result[2] = Math.max(result[2], i + 1);
        result[3] = Math.max(result[3], j + 1);
      }
    }
  }

  return result;
}
