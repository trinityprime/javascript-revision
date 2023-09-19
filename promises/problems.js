// //  Q1

// console.log("Program started.");
// console.log("Program in progress...");

// const programRev = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program complete!");
//   }, 3000);
// });

// programRev.then((programComplete) => {
//   console.log(programComplete);
// });

// //  Q2

// console.log("Program started.");
// console.log("Program in progress...");

// const newLoader = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program Complete!");
//   }, 3000);

//   setTimeout(() => {
//     reject("Program Failed!");
//   }, 2000);
// });

// newLoader
//   .then((complete) => {
//     console.log(complete);
//   })
//   .catch((fail) => {
//     console.log(fail);
//   });

//  Q3

// console.log("Program started!");
// console.log("Program in progress...");

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Step 1 complete!");
//   }, 3000);
// });

// console.log(firstPromise);

// firstPromise
//   .then((stepOne) => {
//     console.log(stepOne);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Step 2 complete!");
//       }, 3000);
//     });
//   })
//   .then((stepTwo) => {
//     console.log(stepTwo);
//   });

//  Q4

console.log("Program started!");
console.log("Program in progress...");

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: "Hello, friend!", error: null });
  }, 2000);
});

console.log(firstPromise);

firstPromise.then((promiseOne) => {
  console.log(promiseOne);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise chain complete!");
    }, 1000);
  }).then((promiseTwo) => {
    console.log(promiseTwo);
  });
});
