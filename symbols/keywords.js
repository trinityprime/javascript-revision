// symbols => advanced primitive data type
// guaranteed unique primitive value (eg. use it as keys inside objects)

//  ex1

const mySymbol = Symbol();

const namedSymbol = Symbol("New Symbol");

console.log(Symbol() === mySymbol); // false
console.log(Symbol("New Symbol") === namedSymbol); // false
console.log(mySymbol === mySymbol); // true

//  ex2

const newObject = {
  champion: "Jax",
  date: 2007,
  skin: "God Staff",
  age: "Unknown",
  [Symbol("price")]: 500, // makes it so that this key is not logged out
};

for (const keys of Object.keys(newObject)) {
  console.log(keys);
}

console.log(newObject);

//  ex3

const myIterable = {};

myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield "Yo!";
};

for (const value of myIterable) {
  console.log(value);
  // normally, cannot iterate over an object.
  // however, when using Symbol.iterator, can.
  // can also define this on classes, custom objects.
}
