function solution(cacheSize, cities) {
  const HIT = 1;
  const MISS = 5;
  const cache = [];
  const lowerCities = cities.map((city) => city.toLowerCase());
  let result = 0;

  if (cacheSize === 0) return lowerCities.length * MISS;

  for (const city of lowerCities) {
    const cacheIdx = cache.indexOf(city);

    if (cacheIdx !== -1) {
      cache.splice(cacheIdx, 1);
      cache.push(city);
      result += HIT;
      continue;
    }

    if (cache.length >= cacheSize) {
      cache.shift();
    }
    cache.push(city);
    result += MISS;
  }

  return result;
}
