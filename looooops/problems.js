//  Q1

i = 5;

while (i <= 10) {
  console.log(i);
  i++;
}

//  Q2

let loggedIn = false;
incorrectLog = 0;

while (loggedIn === false) {
  console.log("Incorrect login details.");
  incorrectLog++;

  if (incorrectLog >= 3) {
    loggedIn = true;
    console.log("In in.");
  }
}

//  Q3

let number = 10;
let even = [];
let odd = [];

while (number <= 40) {
  if (number % 2 === 0) {
    even.push(number);
  } else {
    odd.push(number);
  }
  number++;
}
console.log(`Even: ${even}`);
console.log(`Odd ${odd}`);

//  Q4

let num = 0;

while (num <= 100) {
  num++;

  if (num === 50) {
    console.log("half way there!");
  } else if (num === 100) {
    console.log("you made it!");
  } else if (num % 10 === 0) {
    console.log(`checkpoint ${num}`);
  }
}

console.log("All done!");
