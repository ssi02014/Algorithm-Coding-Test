function solution(m, musicinfos) {
  const obj = {};

  let answer = [];
  let musicinfo = [];
  let [startTime, finishTime] = [[], []];
  let playTime = 0;
  let str = "";

  for (let i = 0; i < musicinfos.length; i++) {
    musicinfo = musicinfos[i].split(",");

    startTime = musicinfo[0].split(":");
    finishTime = musicinfo[1].split(":");
    playTime =
      (finishTime[0] - startTime[0]) * 60 + (finishTime[1] - startTime[1]);

    str = "";

    musicinfo[3] = musicinfo[3]
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");

    m = m
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");

    for (let j = 0; j < playTime; j++) {
      str += musicinfo[3][j % musicinfo[3].length];
    }

    obj[musicinfo[2]] = str;
  }

  for (let key in obj) {
    if (obj[key].indexOf(m) >= 0) {
      if (answer.length === 0) answer = [key, obj[key].length];
      if (obj[key].length > answer[1]) answer = [key, obj[key].length];
    }
  }

  if (answer.length > 0) return answer[0];
  return "(None)";
}
