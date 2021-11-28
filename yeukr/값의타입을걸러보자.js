function solution1() {
  // 여기에 코드를 작성해주세요
  return (data) => ({
    validate(interface) {
      const dataKeys = Object.keys(data);
      const interfaceKeys = Object.keys(interface);

      deleteNotIncluded(dataKeys, interfaceKeys);

      dataKeys.map((key) => {
        if (data[key]) {
          const dataConstructor = data[key].constructor;
          if (dataConstructor !== interface[key]) delete data[key];
        }
      });
    },
  });
}

function deleteNotIncluded(dataKeys, interfaceKeys) {
  const deleteKey = [];

  dataKeys.map((el) => {
    !interfaceKeys.includes(el) && deleteKey.push(el);
  });

  deleteKey.forEach((el) => delete data[el]);
}

const yourMethod = solution();
const data = {
  name: "호랑이",
  greeting: "안녕하세요",
  age: "예순",
  height: 80,
  money: 0,
  list: [2, 5],
  dict: [],
};
yourMethod(data).validate({
  name: String,
  age: Number,
  height: Number,
  money: Number,
  list: Array,
  dict: Object,
});

console.log(data);

function solution2() {
  // 여기에 코드를 작성해주세요
  return (data) => ({
    validate(interface) {
      const dataKeys = Object.keys(data);

      dataKeys.map((key) => {
        const dataConstructor = data[key].constructor;
        if (dataConstructor !== interface[key]) delete data[key];
      });
    },
  });
}
