// Question 1:
console.log("Start");

// setTimeout(function () {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(function () {
//   console.log("Promise");
// });

// console.log("End");

// Output:
// Start
// End
// Promise
// Timeout

// Question 2
// var x = true
// setTimeout(() => {x = false}, 1000)
// while(x) { console.log("something") }

// Infinite loop is the answer

async function delay() {
// write code here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

// console.log(1)
// call delay here
// await delay()
// console.log(2)

// JS Curring
// sum(1)(2)(3)(4)()

// const curry = (a) => {
//   console.log(`a`, a)
//   return (b) => {
//      console.log(`b`,b)
//     if (b) {
//       return curry(a+b)
//     } else {
//       return a
//     }
//   }
// }

const sum = (a, b) => {
  return a + b;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this,args)
    } else {
      return function(...next) {
        return curried.apply(this, args.concat(next)) 
      }
    }
  }
}
const curriedSum = curry(sum)
console.log('sum', curriedSum(1)(2))

// Question 4: Implement polyfill for Promise.All
const promise1 = new Promise((resolve) => {
  resolve(1);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('failed once'), 500)
// })
// const promise4 = new Promise((resolve, reject) => {
//   reject('failed')
// })
const promiseArr = [promise1, promise2];

const polyfillPromiseAll = (promiseArr) => {
  let resolveFunction;
  let rejectFunction;
  const promise = new Promise((resolve, reject) => {
    resolveFunction = resolve;
    rejectFunction = reject;
  });
  const resArr = [];
  let promisesResolved = 0;
  promiseArr.forEach((promise) => {
    promise
      .then((res) => {
        resArr.push(res);
        promisesResolved++;
        if (promisesResolved === promiseArr.length) {
          resolveFunction(resArr);
        }
      })
      .catch((err) => {
        rejectFunction(err);
      });
  });
  return promise;
};

Promise.all(promiseArr)
  .then((arg) => {
    console.log("all", arg);
  })
  .catch((arg) => {
    console.log("error all", arg);
  });

polyfillPromiseAll(promiseArr)
  .then((arg) => {
    console.log("p-all", arg);
  })
  .catch((arg) => {
    console.log("p-error all", arg);
  });
