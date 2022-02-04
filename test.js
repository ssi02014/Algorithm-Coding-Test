let a = 5;

const promise = new Promise((resolve, reject) => {
  if (a < 5) {
    resolve("a < 10 true이다");
  } else {
    reject("a < 10은 false이다");
  }
});

function resolve(res) {
  console.log(res);
}

function rejected(err) {
  console.log(err);
}

// 둘이 같음
promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);

promise.then(resolve, rejected);
