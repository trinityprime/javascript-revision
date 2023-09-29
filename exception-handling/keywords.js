// try --> catch --> finally

//  ex1

try {
  const object = "Ball";
  console.log(object);
  throw new Error("Boom");
} catch (error) {
  console.error(error); // when handling errors, use **console.error**
  console.error("Caught!");
}

//  ex2

try {
  const profile = {
    name: "Josh",
    age: 19,
    // hobbies: {
    //   main: "Cycling",
    // },
  };
  console.log(profile.hobbies.two); // if error, code below will not be accessed.
  console.log("Do I get here?");
} catch (error) {
  console.error(error);
}

//  ex3

try {
  const message = "Hello";
  console.log(message);
  throw new Error(err);
} catch {
  console.log(err);
  console.log(message);
}

console.log("Message complete!");

//  ex4
