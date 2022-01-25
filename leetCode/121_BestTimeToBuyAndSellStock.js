var maxProfit = function (prices) {
  let buyMin = Number.MAX_SAFE_INTEGER;
  let sellMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyMin) {
      buyMin = prices[i];

      for (let j = i + 1; j < prices.length; j++) {
        if (sellMax < prices[j] - buyMin) {
          sellMax = prices[j] - buyMin;
        }
      }
    }
  }

  if (sellMax < 0) return 0;
  return sellMax;
};

console.log(maxProfit([5, 3, 1]));
