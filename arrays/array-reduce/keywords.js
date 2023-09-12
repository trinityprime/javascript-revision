// array reduce => take values inside an array, reduce them into something smaller. (eg. numbers into a sum.)

//  ex1

const cities = ["london", "vancouver", "mumbai", "new york"];

const mergeCities = cities.reduce((result, city) => {
  return result + city;
}, " "); // <= " " is the starting value

console.log(mergeCities);

//  ex2

const nums = [1, 2, 3, 4, 5];

const sumNums = nums.reduce((result, num) => {
  return result + num;
}, 0); // num adds from 0.

console.log(sumNums);

//  ex3

const arrayInArray = nums.reduce((array, nums) => {
  console.log(array, nums);
  array.push(nums);

  return array;
}, []);

console.log(arrayInArray); // returns a copy of nums array [ 1, 2, 3, 4, 5]
