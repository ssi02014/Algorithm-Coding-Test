function solution(files) {
  files = files.map((file) => {
    const obj = {};
    let numberLastIdx = 0;
    let str = "";

    obj.value = file;

    for (let el of file) {
      const isNumber = isNaN(Number(el));

      if (isNumber || el === " ") str += el.toLowerCase();
      else break;
    }

    obj.header = str;
    str = "";

    for (let el of file) {
      let isNumber = isNaN(Number(el));

      if (!isNumber && el !== " ") str += el;
      else {
        if (str.length) {
          numberLastIdx = file.indexOf(el) - 1;
          break;
        }
      }
    }
    obj.number = +str;
    obj.tail = file.slice(numberLastIdx);

    return obj;
  });

  return files
    .sort((a, b) => {
      if (a.header < b.header) return -1;
      else if (a.header === b.header) {
        if (a.number < b.number) return -1;
      }
    })
    .map((el) => el.value);
}
