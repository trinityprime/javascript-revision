// arrays

//  ex1 (.length)

const pets = ["dog", "cat", "rabbit"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

//  ex2 (.push)

const animals = ["cow", "sheep", "horse"];
animals.push("moose");

console.log(animals); // cow, sheep, horse, moose

//  ex3 (.pop)

const brand = ["apple", "google", "samsung"];
brand.pop(2);

console.log(brand); // apple, google

//  ex4

const weapon = ["sword", "gunlance", "bow"];
weapon.unshift("bowgun");

console.log(weapon); // bowgun, sword, gunlance, bow

// ex5

weapon.shift();

console.log(weapon); // sword, gunlance, bow
