//  Q1

try {
  console.log("Program started!");
  throw new Error("Uh Oh!");
} catch (error) {
  console.error(error);
}

console.log("Program complete!");

//  Q2

for (let i = 1; i < 10; i++) {
  console.log(`Loop ${i}`);
  try {
    if (i === 5) {
      throw new Error("Boom!");
    }
  } catch (error) {
    console.error(error);
  }
}

//  Q3

try {
  const user = {
    name: "Misha",
    age: 22,
    settings: {
      color: "blue",
    },
  };

  console.log("Creating user...");
  console.log(user.profile.color);
  console.log("User created!");

  if (user.profile.color === undefined) {
    throw new TypeError("Color not found!");
  }
} catch (error) {
  console.log(`Something went wrong: ${error}`);
}

console.log("Program complete!");

//  Q4

let number = 1337;

try {
  number += Math.random() * 1001;
  console.log(number.toFixed(2));
  if (number < 2000) {
    throw new Error("You Lose!");
  } else {
    console.log("You Win!");
  }
} catch (error) {
  console.error(error);
  console.error(number.toFixed(2));
}
