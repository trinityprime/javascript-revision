// switch-statements => replaces if-else if statements (works well with primitive types)

//  ex1

const animal = "Gorilla";

const whatAni = (ani) => {
  switch (ani) {
    case "Gorilla":
    case "Monkey": {
      // if animal === "Gorilla" || animal === "Monkey"
      console.log("This is similar to a human!");
      break;
    }
    case "Giraffe": {
      console.log("This is a Giraffe!");
      break;
    }
    case "Panda": {
      console.log("This is a Panda!");
      break;
    }
    default: {
      // if none of the cases are met, logs out default value.
      console.log("Error 404.");
    }
  }
};

whatAni(animal);

