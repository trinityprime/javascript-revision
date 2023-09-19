// promises => in a state of pending, fulfilled, rejected (only 1)
// once in one state, cannot be another. (if fulfilled, cannot be rejected)

//  ex1

const myPromise = new Promise((resolved, rejected) => {
  // promises have "resolve" and "rejected" parameters
  setTimeout(() => {
    console.log("Hello, world.");
  }, 1000);
});

console.log("Hello!"); // this prints first due to setTimeout

//  ex2 -------------------------------------------------------

const timeWaste = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Waste of time.");
    console.log(1000);
  }, 1000);
});

timeWaste.then((resolvedValue) => {
  // resolvedValue takes resolved as the parameter (thus taking "Waste of time")
  console.log(resolvedValue);
});

//  ex3 -------------------------------------------------------

const gotIceCream = new Promise((resolved, rejected) => {
  setTimeout(() => {
    console.log("Greetings.");
    resolved("How can I help you?");
    console.log(2000);
  }, 2000);
});

gotIceCream
  // .then links to resolved
  .then((gotValue) => {
    console.log("ice cream is done.");
    console.log(gotValue);
  })
  // .catch links to rejected
  .catch((error) => {
    console.log("Error 404.");
    console.log(error);
  });
