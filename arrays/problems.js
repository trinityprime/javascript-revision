//  Q1

const planets = ["Mercury", "Venus", "Earth", "Mars"];

planets.push("Jupiter");
console.log(planets);

planets.unshift("Sun");
console.log(planets);

planets.splice(4, 2);
console.log(planets);

planets.splice(0, 2);
console.log(planets);

//  Q2

let multiple = 5;

const numbers = [10, 11, 12, 13, 14, 15];
for (let i = 0; i < numbers.length; i++) {
  const result = numbers[i] * multiple;
  console.log(`${numbers[i]} x ${multiple} = ${result}`);
}

//  Q3

const greeting = "Hello, nice to meet you!";

for (let i = 0; i < greeting.length; i++) {
  console.log(`${greeting[i]} is at index ${i}`);
}

//  Q4

let total = 0;
let average = 0;

const grades = [55, 63, 82, 98, 91, 43, 100];
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
  average = total / grades.length;
}
console.log(average);

//  Q5

const bakery = ["Cake", "Cookie", "Bread", "Scone"];

const myBakery = bakery;
myBakery.push("Crossiant");
myBakery.push("Granola");

console.log(bakery);
console.log(myBakery); // both are the same.
