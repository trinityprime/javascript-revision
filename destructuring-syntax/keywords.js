// destructuring syntax => values in array are destructured into 4 variables.
// can be used for array, string, obj, map, set

// ex1

const fruits = ["Apples", "Grapes", "Pears", "Mangoes"];

const [red, purple, green, orange] = fruits;

console.log(red); // Apples
console.log(purple); // Grapes

//  ex2

const brands = ["Apple", "Samsung", "Amazon", "Nestle"];

const [, android, prime] = brands; // first value is ignored

console.log(android);
console.log(prime);

//  ex3

const classes = ["Gunner", "Scout", "Engineer"];

const [, , rock, stone = "Driller"] = classes;
// dont do this though, bad practice
// if not assigned, returns undefined
console.log(rock);
console.log(stone);

// ex4

const witcher = ["Geralt", "Ciri", "Yen", "Triss"];

const [main, ...rest] = witcher;

console.log(main);
console.log(rest); // returns rest of values as an array

//  ex5

// order is based on **key names**, not up to down.
const movie = {
  title: "Dune",
  year: 2021,
  length: 155,
  book: true,
};

const { title, year, length, book } = movie; // use curly bracket btw.

console.log(title, year, length, book);
