// spread turns everything into an array 

// only makes copies of primitive types, not reference types. 
// => means that changes in original for reference types will also happen in spread vice versa

// primitive => boolean, number, string
// reference => object, array, function

//  ex1 (array spread syntax => ...)

const array = [10, 20, 30, 40, 50];

let array2 = [...array]; // makes a *separate* copy of array
array2 = [1, 2, 3, 4, 5, ...array, 60, 70, 80];

console.log(array);
console.log(array2);

//  ex2 (string spread syntax => ...)

const phrase = "Hello, World";

const spreadPhrase = ["!", ...phrase, "!"];

console.log(spreadPhrase);

//  ex3 (set spread syntax (turns set into array) => ... )

const cube = new Set();
cube.add(1);
cube.add(2);
cube.add(15);

console.log(cube);

const cuban = [100, 200, ...cube, 30, 3];

console.log(cuban);

//  ex4 (map spread syntax (turns map into array) => ... )
//  becomes array of arrays

const stock = new Map();

stock.set("Mango", 20);
stock.set("Apple", 15);
stock.set("Pear", 5);

console.log(stock);

const stockArr = [...stock, ["Grapes", 1]];

console.log(stockArr);

// ex5 (object spread syntax (adds existing key values to another object) => ...)

const countryPop = {
  Brasil: 83,
  Germany: 103,
  Egypt: 102,
};

const countryPopExtend = {
  Brasil: 999, // gets overwritten, so Brasil is still 83
  ...countryPop,
  Singapore: 6,
  USA: 200,
};

console.log(countryPop);
console.log(countryPopExtend);

//  ex6 ("shallow" copies)
