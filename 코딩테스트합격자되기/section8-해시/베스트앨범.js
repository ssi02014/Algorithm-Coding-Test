/**
 * 프로그래머스 레벨3 베스트 앨범 (고난이도 문제, 재풀이)
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */
function solution(genres, plays) {
  // 각 장르 누적 플레이 객체 및 아이디 별 노래 정보를 매핑한 객체 반환
  const getMusicInfo = () => {
    const musicInfoObj = {};
    const genrePlayCountObj = {};

    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i];
      const play = plays[i];

      genrePlayCountObj[genre] = (genrePlayCountObj[genre] || 0) + play;
      musicInfoObj[i] = { play, genre };
    }

    return {
      musicInfoObj,
      genrePlayCountObj,
    };
  };

  const { musicInfoObj, genrePlayCountObj } = getMusicInfo();
  const musicInfoEntries = Object.entries(musicInfoObj);

  musicInfoEntries.sort((a, b) => {
    const { genre: aGenre, play: aPlay } = a[1];
    const { genre: bGenre, play: bPlay } = b[1];
    const aId = a[0];
    const bId = b[0];

    // 1. 장르가 다르면 많이 재생된 장르를 먼저 수록
    if (aGenre !== bGenre) {
      return genrePlayCountObj[bGenre] - genrePlayCountObj[aGenre];
    }

    // 2. 장르가 같다면, 장르 내에서 많이 재생된 노래를 먼저 수록
    if (aPlay !== bPlay) {
      return bPlay - aPlay;
    }

    // 3. 장르와 장르 내 재생 횟수가 같다면 고유 번호가 낮은 노래를 먼저 수록
    return aId - bId;
  });

  // 베스트 앨범은 장르 별로 가장 많이 재생된 노래를 두 개씩 모은 것!
  // 따라서 가장 많이 재생된 두 곡만을 수록하면 되고, 해당 장르에 곡이 하나라면 하나만 수록하면 됌
  const getBestAlbum = () => {
    const bestAlbum = [];
    const genrePerCountObj = {};

    for (let i = 0; i < musicInfoEntries.length; i++) {
      const entry = musicInfoEntries[i];
      const id = entry[0];
      const genre = entry[1].genre;

      genrePerCountObj[genre] = (genrePerCountObj[genre] || 0) + 1;

      if (genrePerCountObj[genre] <= 2) {
        bestAlbum.push(+id);
      }
    }

    return bestAlbum;
  };

  return getBestAlbum();
}
