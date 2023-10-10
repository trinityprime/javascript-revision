// async-generators => yield promise objects, wrapper for async operations

//  ex1

const generator = async function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved after 1 second.");
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved after 2 seconds.");
    }, 2000);
  });
};

const generatorObject = generator();

const asyncGenerator = async () => {
  for await (const promise of generatorObject) {
    console.log(promise);
  }
};

console.log("Program started.");
asyncGenerator();
console.log("Program ended.");

//  ex2 (infinite async generator)

const ticking = async function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i++;
  }
};

const tickInfinte = ticking();

const asyncTick = async () => {
  for await (const num of tickInfinte) {
    console.log(num);
  }
};

asyncTick();
