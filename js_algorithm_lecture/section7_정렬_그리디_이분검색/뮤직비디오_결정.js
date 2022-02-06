// 결정 알고리즘에서 중요한건 유효한지 안유효한지 검사하는 로직!
function count(songs, capacity) {
  let count = 1;
  let sum = 0;

  for (let song of songs) {
    if (sum + song > capacity) {
      count++;
      sum = song;
    } else {
      sum += song;
    }
  }
  return count;
}

function solution(m, songs) {
  let result = 0;
  let start = Math.max(...songs);
  let end = arr.reduce((acc, cur) => acc + cur, 0);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (count(songs, mid) <= m) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
