//  Q1

let even = [];
let odd = [];

for (let i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}
console.log(`Even: ${even}`);
console.log(`Odd: ${odd}`);

//  Q2

let loggedIn = false;

for (let i = 0; i <= 3; i++) {
  if (i === 3) {
    loggedIn === true;
    console.log("Successfully Logged In!");
    break;
  }

  if (loggedIn !== true) {
    console.log("Incorect Login Credentials");
  }
}

//  Q3

for (let i = 0; i <= 100; i++) {
  if (i === 50) {
    console.log(`Half way there!`);
    continue;
  }
  if (i === 100) {
    console.log(`You made it!`);
    break;
  }
  if (i % 10 === 0) {
    console.log(`Checkpoint! ${i}`);
  }
}
console.log(`All done!`);
