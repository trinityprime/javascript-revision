//  Q1

const countToTen = function* () {
  let i = 0;
  while (i <= 10) {
    yield i;
    i++;
  }
};

const counter = countToTen();

for (let count of counter) {
  console.log(count);
}

console.log("All done!");

//  Q2

const randNum = function* () {
  while (true) {
    let i = Math.floor(Math.random() * 100) + 1;
    yield i;
  }
};

const randGenerator = randNum();

for (let i = 0; i < 10; i++) {
  console.log(randGenerator.next().value, "cows");
}

//  Q3

const randRange = function* (amount, min, max) {
  let i = 0;
  while (i < amount) {
    yield Math.floor(Math.random() * (max - min + 1) + min);
    i++;
  }
};

const rangeGenerator = randRange(3, 10, 20);
const rangeGenerator1 = randRange(5, 100, 200);
const rangeGenerator2 = randRange(10, 1000, 2000);

console.log("First:");
for (const value of rangeGenerator) {
  console.log(value);
}

console.log("Second:");
for (const value of rangeGenerator1) {
  console.log(value);
}

console.log("Third:");
for (const value of rangeGenerator2) {
  console.log(value);
}
