function solution(m, n, board) {
  const blockBoard = board.map((el) => el.split(""));
  const directions = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
  ];

  // 제거 가능한 블록인지 체크
  const getIsValidRemovedBlock = (y, x) => {
    const curBlock = blockBoard[y][x];

    if (
      curBlock &&
      curBlock === blockBoard[y + 1][x] &&
      curBlock === blockBoard[y][x + 1] &&
      curBlock === blockBoard[y + 1][x + 1]
    ) {
      return true;
    }
    return false;
  };

  // 제거 할 블록을 배열로 모아 반환
  const getRemovedBlocks = () => {
    const removedBlocks = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        // 제거 가능한 블록이면 배열 Push
        if (getIsValidRemovedBlock(i, j)) {
          removedBlocks.push([i, j]);
        }
      }
    }

    return removedBlocks;
  };

  // board에서 블록 제거
  const removeBlock = (removedBlocks) => {
    removedBlocks.forEach((block) => {
      const [curY, curX] = block;

      directions.forEach((direction) => {
        const [dy, dx] = direction;
        const [ny, nx] = [curY + dy, curX + dx];

        // 0은 제거된 블록을 의미
        blockBoard[ny][nx] = 0;
      });
    });
  };

  // 블록 위치 스왑
  const swapBlock = () => {
    // board 하단부터 체크
    for (let i = m - 1; i > 0; i--) {
      const isFullFilledRow = blockBoard[i].every((block) => block);

      if (isFullFilledRow) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          const isValidSwap = !blockBoard[i][j] && blockBoard[k][j];

          if (isValidSwap) {
            blockBoard[i][j] = blockBoard[k][j];
            blockBoard[k][j] = 0;
            break;
          }
        }
      }
    }
  };

  // 제거 한 블록 카운트 반환
  const getRemoveBlockCount = () => {
    let count = 0;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!blockBoard[i][j]) count++;
      }
    }

    return count;
  };

  while (true) {
    const removedBlocks = getRemovedBlocks();

    // 제거 할 블록이 남지않으면 무한 반복문 제거
    if (!removedBlocks.length) break;

    // removedBlocks 바탕으로 board에서 block 삭제
    removeBlock(removedBlocks);

    // swap 진행
    swapBlock();
  }

  return getRemoveBlockCount();
}
