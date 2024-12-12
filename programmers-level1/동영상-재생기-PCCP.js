/**
 * 프로그래머스 레벨1 동영상 재생기 - PCCP 기출 문제 1번
 * https://school.programmers.co.kr/learn/courses/30/lessons/340213
 */
function solution(video_len, pos, op_start, op_end, commands) {
  const getTime = (time) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  // 현재 위치가 오프닝 시작, 오프닝 끝 사이에 있으면 현재 위치를 오프닝 끝 시간으로 설정
  const setOpEndTime = (pos, opStart, opEnd) => {
    if (pos <= opEnd && pos >= opStart) {
      return opEnd;
    }
    return pos;
  };

  const videoLenTime = getTime(video_len);
  const opStartTime = getTime(op_start);
  const opEndTime = getTime(op_end);
  let posTime = getTime(pos);

  posTime = setOpEndTime(posTime, opStartTime, opEndTime);

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command === "next") {
      posTime += 10;

      if (posTime >= videoLenTime) {
        posTime = videoLenTime;
      }
    } else {
      posTime -= 10;

      if (posTime <= 0) {
        posTime = 0;
      }
    }

    posTime = setOpEndTime(posTime, opStartTime, opEndTime);
  }

  const resultMinutes = String(Math.floor(posTime / 60)).padStart(2, "0");
  const resultSeconds = String(posTime % 60).padStart(2, "0");

  return `${resultMinutes}:${resultSeconds}`;
}
