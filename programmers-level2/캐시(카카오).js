function solution(cacheSize, cities) {
  const cache = [];
  let answer = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.map((city) => {
    city = city.toLowerCase();

    if (!cache.includes(city)) {
      if (cache.length < cacheSize) {
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    } else {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    }
  });

  return answer;
}
