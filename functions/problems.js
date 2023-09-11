//  Q1

const chill = () => {
  console.log("Doing some chilling");
  for (let i = 1; i <= 10; i++) {
    console.log(`"Chill... ${i}"`);
  }
  console.log("That was ice cold!");
};

chill();

//  Q2

const noRemainder = (number, mod) => {
  if (number % mod === 0) {
    return true;
  } else {
    return false;
  }
};

const result1 = noRemainder(10, 7);
const result2 = noRemainder(100, 10);

console.log(result1, result2);

//  Q3

const login = (username, password) => {
  if (username === "admin") {
    return true;
  } else if (username === "monkey" && password === "123") {
    return true;
  } else if (username === "moomoo" && password === "farm") {
    return true;
  } else {
    return false;
  }
};

const test1 = login("hello", "meow");
const test2 = login("admin", "lol");
const test3 = login("monkey", "123");
const test4 = login("moomoo", "farm");
const test5 = login("moomoo", "moo");

console.log(test1, test2, test3, test4, test5);

//  Q4

const square = (num) => {
  return num ** 2;
};

const sumOfSquares = (num1, num2) => {
  return square(num1) + square(num2);
};

const sum1 = sumOfSquares(2, 3);
const sum2 = sumOfSquares(3, 4);

console.log(sum1, sum2);
