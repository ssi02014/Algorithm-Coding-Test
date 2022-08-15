// function solution(numbers) {
//   let result = [];

//   numbers.forEach((number) => {
//     let binaryCurNumber = number.toString(2);
//     let nextNumber = number + 1;

//     while (true) {
//       const binaryNextNumber = nextNumber.toString(2);
//       const diffLength = binaryNextNumber.length - binaryCurNumber.length;
//       let count = 0;

//       if (diffLength > 0) {
//         binaryCurNumber = "0" + binaryCurNumber;
//       }

//       for (let i = 0; i < binaryCurNumber.length; i++) {
//         if (binaryCurNumber[i] !== binaryNextNumber[i]) {
//           count++;
//         }
//       }

//       if (count === 1 || count === 2) {
//         result.push(parseInt(binaryNextNumber, 2));
//         break;
//       } else {
//         nextNumber++;
//       }
//     }
//   });
// }

function solution(numbers) {
  const result = [];

  numbers.forEach((number) => {
    let binaryCurNumber = number.toString(2);

    if (number % 2 === 0) {
      result.push(number + 1);
    } else {
      binaryCurNumber = "0" + binaryCurNumber;

      for (let i = binaryCurNumber.length - 1; i >= 0; i--) {
        if (binaryCurNumber[i] === "0") {
          result.push(
            parseInt(
              binaryCurNumber.substring(0, i) +
                "10" +
                binaryCurNumber.substring(i + 2, binaryCurNumber.length),
              2
            )
          );
          break;
        }
      }
    }
  });
  return result;
}

solution([2, 7]);
