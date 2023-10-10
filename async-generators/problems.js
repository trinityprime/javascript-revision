//  Q1

const randomGenerator = async function* () {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 10));
      }, 1000);
    });
  }
};

const randomNumber = randomGenerator();

const asyncRandomGenerator = async () => {
  for await (const num of randomNumber) {
    console.log(num);
  }
};

asyncRandomGenerator();

//  Q2

const fastOrSlow = async function* () {
  while (true) {
    const chance = Math.random();
    if (chance < 0.5) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Fast!");
        }, 500);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Slow...");
        }, 2000);
      });
    }
  }
};

const fastSlowGenerator = fastOrSlow();

const asyncFastSlow = async () => {
  for await (const random of fastSlowGenerator) {
    console.log(random);
  }
};

asyncFastSlow();

//  Q3

const letterGenerator = async function* (sentence) {
  for (const i of [...sentence]) {
    if (["a", "e", "i", "o", "u"].includes(i)) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("*");
        }, 100);
      });
    } else {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(i.toUpperCase());
        }, 100);
      });
    }
  }
};
const letterObjGen = letterGenerator("Monkeys are the coolest animal");

const asyncGenerator = async () => {
  for await (const letter of letterObjGen) {
    console.log(letter);
  }
};

asyncGenerator();

//  Q4

const generator = function* (time) {
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
    time *= 2;
  }
};
  
const generatorObject = generator(100);

const asyncObjGenerator = async () => {
  for await (const time of generatorObject) {
    console.log(time);
  }
};

asyncObjGenerator();
