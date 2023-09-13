// objects =>

//  ex1

const person = {
  id: 42, // key-value pair
  name: "Ryan",
  age: 19,
};

person.id = 55;
person.name = "Nader";

console.log(person);

//  ex2

const animal = {
  id: 34,
  name: "Jax",
  type: "dog",
};

console.log("name" in animal); // only works to find keys

// ex3

const subject = {
  id: 5,
  mark: 60,
  type: "math",
};

console.log(Object.keys(subject));
console.log(Object.values(subject));
