// generators => a way to make iterators (in for of loop) and handle async operations
// can only go through it once (cannot iterate through generator twice)

//  ex1

const counter = function* () {
  // MUST have "*" after function, cannot use arrow function btw!!
  // pause here and return the generator, without .next() if just call counter. so it will return nothing if no .next()
  yield 1;
  yield 2;
  yield 3;
};

const counterGenerator = counter();
// returns an object {value: ... done: ...}
console.log(counterGenerator.next()); // value: 1, done: false (yield 1)
console.log(counterGenerator.next()); // value: 2, done: false (yield 2)
console.log(counterGenerator.next()); // value: 3, done: false (yield 3)
console.log(counterGenerator.next()); // value: undefined, done: true (since generator is not yielding past 3)

//  ex2

const kills = function* () {
  yield 1;
  yield 3;
  yield 5;
  yield 10;
};

const killCounter = kills();

for (const count of killCounter) {
  console.log(count);
}

console.log("All done!");

//  ex3

const infiniteLoop = function* () {
  // generator outputs infinte while taking up almost no space. (no memory constraints)
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const infiniteGenerator = infiniteLoop();

let count = 0;
while (count < 10) {
  console.log(infiniteGenerator.next().value);
  count++;
}
