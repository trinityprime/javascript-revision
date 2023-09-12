//  Q1

const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((sumNum, point) => {
  return sumNum + point;
}, 0);

console.log(sum);

//  Q2

const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }
  if (i === company.length - 1) {
    return result + company;
  }
  return result + company + "-";
}, "");

console.log(modded);

//  Q3

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((result, price) => {
  if (price > 6) {
    return result + price;
  } else return result + price * 1.2;
}, 0);

console.log(afterTax);

//  Q4

const items = ["light", "banana", "phone", "book", "mouse"];

const caps = items.map((item) => {
  return item.toUpperCase();
});

const concat = caps.reduce((concatenated, upper) => {
  return concatenated + upper + " ";
}, "");

console.log(items);
console.log(caps);
console.log(concat);

//  Q5

const nums = [10, 30, 50, 70, 90];

const squared = nums.map((num) => {
  return num * num;
}, 0);

const over1000 = squared.filter((result) => {
  if (result > 1000) {
    return true;
  }
  return false;
}, 0);

const finale = over1000.reduce((concat, nums) => {
  return concat + nums;
}, 0);

console.log(squared);
console.log(over1000);
console.log(finale);
