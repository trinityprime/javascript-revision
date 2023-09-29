// async/await => built on promises, makes asynchronous code look synchronous

//  ex1

const makeTimeout = (ms) => {
  const timeout = new Promise((resolved, rejected) => {
    setTimeout(() => {
      resolved("Timeout done.");
    }, ms);
  });
  return timeout;
};

makeTimeout(1000).then((result) => {
  console.log(`From .then function: ${result}`);
});

const callTimeout = async () => {
  const result = await makeTimeout(1000); // await is basically .then equivalent for async/await syntax
  console.log(`From async function: ${result}`);
};

callTimeout(); // remember to call function

//  ex2

const fetchData = () => {
  const data = new Promise((resolve, reject) => {
    resolve("Data received.");
  });
  return data;
};

const callData = async () => {
  const result = await fetchData();
  console.log(result);
};

console.log("Program started...");
callData();
console.log("Program finished!");

//  ex3 (variation 1)

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Timeout done.");
    }, ms);
  });
  return timeout;
};

console.log("Program started..."); // 1

const fetchData = async () => {
  console.log("Fetching data..."); // 2
  const result1 = await makeTimeout(1000);
  console.log("Fetching second set of data...", result1); // 4
  const result2 = await makeTimeout(1000);
  const finalResult = await Promise.all([result1, result2]); // Promise.all() fetches both results at the same time instead of doing it one after the other
  console.log("Done fetching data!", finalResult); // 5
};

fetchData();
// function is called, first console.log() is executed
// waits 1sec, see if any other synchronous code can be executed
// console.log("Program complete!") is executed
// then moves on to rest of code in function since no more synchronous code

console.log("Program complete for variation 1!"); // 3

//  ex4

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("There was an error.");
    }, ms);
  });
  return timeout;
};

const runTimeout = async () => {
  try {
    const result = await makeTimeout(1000);
    console.log(result);
  } catch (error) {
    console.log("There was an error????");
    console.log(error);
  }
};

console.log("Program started.");
runTimeout();
console.log("Program ended.");
