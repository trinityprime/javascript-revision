// array maps => transforming array using a function on each element in the array
// get back a new array.

//  ex1

const cities = ["london", "vancouver", "mumbai", "new york"];

const bigCities = cities.map((city) => {
  return city.toUpperCase();
});

console.log(bigCities);

//  ex2

const numbers = [1, 2, 3, 4, 5];

const multiplyTen = numbers.map((number) => {
  return number * 10;
});

console.log(multiplyTen);
