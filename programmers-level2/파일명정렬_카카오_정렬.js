// 1. 정규표현식 사용하지 않은 풀이
function solution(files) {
  const mappingFiles = files.map((file) => {
    const tempObj = {};
    let [head, number] = ["", ""];

    for (const word of file) {
      const isNumber = !isNaN(+word);

      if (isNumber && word !== " ") break;
      head += word.toLowerCase();
    }

    tempObj.head = head;

    for (const word of file) {
      const isNumber = !isNaN(+word);
      const isTail = !isNumber && number.length;

      if (isTail) break;
      if (isNumber && word !== " ") number += word;
    }

    tempObj.origin = file;
    tempObj.head = head;
    tempObj.number = +number;

    return tempObj;
  });

  return mappingFiles
    .sort((a, b) => a.head.localeCompare(b.head) || a.number - b.number)
    .map((file) => file.origin);
}

// 2. 정규표현식을 사용한 풀이
function solution(files) {
  const regex = /([^0-9]+)([0-9]+)(.*)/;

  const mappingFiles = files.map((file) => {
    const matchedFile = file.match(regex);
    const [head, number] = [matchedFile[1].toLowerCase(), +matchedFile[2]];

    return {
      origin: file,
      head,
      number,
    };
  });

  return mappingFiles
    .sort((a, b) => a.head.localeCompare(b.head) || a.number - b.number)
    .map((file) => file.origin);
}

// 3. sort 내부 풀이
function solution(files) {
  const REGEX = /(^[^0-9]+)(\d+)(.*)/;

  return files.sort((a, b) => {
    const [aTotal, aHead, aNum] = a.match(REGEX);
    const [bTotal, bHead, bNum] = b.match(REGEX);
    const aLowerHead = aHead.toLowerCase();
    const bLowerHead = bHead.toLowerCase();

    return aLowerHead.localeCompare(bLowerHead) || +aNum - +bNum;
  });
}
