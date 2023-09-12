//  Q1

const practices = [25, 26, 27, 28, 29, 30];

const squaredNum = practices.map((practice) => {
  return practice ** 2;
});

console.log(squaredNum);

//  Q2

const bools = [true, true, false, true, false, false];

const changeBools = bools.map((bool) => {
  if (bool === true) {
    return Math.floor(Math.random() * 101); // return 0 to 100 random num
  } else {
    return 0;
  }
});

console.log(changeBools);

//  Q3

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxedPrices = prices.map((price) => {
  if (price > 10) {
    return Math.round((price *= 1.2));
  } else {
    return price;
  }
});

console.log(prices);
console.log(taxedPrices);

//  Q4

const items = ["light", "banana", "phone", "book", "mouse"];

const plurals = items.map((item) => {
  if (item === "mouse") {
    return "mice";
  }
  return item + "s";
});

console.log(plurals);

//  Q5

const row = [10, 20, 30, 40, 50];

const matrix = row.map((rowing) => {
  return Array.of(rowing); // Array.of() creates a new array.
});

console.log(row);
console.log(matrix);
