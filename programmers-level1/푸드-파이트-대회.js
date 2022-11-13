// function solution(food) {
//   const validFoods = food
//     .slice(1)
//     .reverse()
//     .map((el) => el - (el % 2));
//   let result = [0];

//   for (let i = 0; i < validFoods.length; i++) {
//     while (validFoods[i]) {
//       const numberOfFood = validFoods.length - i;

//       result = [numberOfFood, ...result, numberOfFood];
//       validFoods[i] -= 2;
//     }
//   }

//   return result.join("");
// }

// 리팩토링
function solution(food) {
  const foodCounts = food
    .slice(1)
    .reverse()
    .map((el) => el - (el % 2));

  const result = foodCounts.reduce(
    (acc, cur, i) => {
      const numberOfFood = foodCounts.length - i;

      while (cur) {
        acc = [numberOfFood, ...acc, numberOfFood];
        cur -= 2;
      }

      return acc;
    },
    [0]
  );

  return result.join("");
}
