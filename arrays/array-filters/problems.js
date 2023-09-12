//  Q1

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumbers = practice.filter((number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNumbers);

//  Q2

const countries = [
  "France",
  "South Africa",
  "Brazil",
  "United States",
  "Sweden",
];

const filterCountries = countries.filter((country) => {
  if (country.includes(" ")) {
    return true;
  } else {
    return false;
  }
});

console.log(countries);
console.log(filterCountries);

//  Q3

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
const tax = 1.15;

const lowPrices = prices.filter((price) => {
  let newPrice = price * tax;
  if (newPrice < 10) {
    return true;
  } else {
    return false;
  }
});

console.log(prices);
console.log(lowPrices);

//  Q4

const values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

const hasTwos = values.filter((value) => {
  if (value.includes(2)) {
    return true;
  } else {
    return false;
  }
});

console.log(values);
console.log(hasTwos);

//  Q5

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => {
  return num * 2;
});

const over50 = timesTwo.filter((result) => {
  if (result > 50) {
    return true;
  } else {
    return false;
  }
});

console.log(nums);
console.log(timesTwo);
console.log(over50);
