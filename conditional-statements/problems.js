//  Q1

let points = 50;

if (points > 20) {
  points -= 10;
}
console.log(points);

//  Q2

console.log("---Animal Checker Program---");

let animal = "dog";

if (animal === "cat") {
  console.log("Meow!");
} else if (animal === "dog") {
  console.log("Woof!");
} else {
  console.log("Not a dog or a cat...");
}
console.log("---Animal Check complete!---");

//  Q3

let number = 10;

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
