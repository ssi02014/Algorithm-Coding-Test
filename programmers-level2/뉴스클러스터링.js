function solution(str1, str2) {
  const strOneUpper = str1.toUpperCase();
  const strTwoUpper = str2.toUpperCase();

  const splitOneList = filterSplitStr(strOneUpper);
  const splitTwoList = filterSplitStr(strTwoUpper);

  const union = [];
  const intersection = [];

  splitTwoList.map((el, i) => {
    if (splitOneList.includes(el)) {
      intersection.push(splitOneList.splice(splitOneList.indexOf(el), 1));
    }
    union.push(el);
  });

  splitOneList.map((el) => union.push(el));

  if (!union.length) return 65536;
  else if (!intersection.length) return 0;
  return Math.floor((intersection.length / union.length) * 65536);
}

function filterSplitStr(str) {
  const list = [];

  for (let i = 0; i < str.length; i++) {
    let temp = "";
    let match = [];

    for (let j = i + 1; j <= i + 1; j++) {
      if (!str[j]) break;
      temp += str[i] + str[j];
    }

    match = temp.match(/[A-Z]{2}/gi);

    if (match) list.push(match.join(""));
  }

  return list.sort();
}
