import greeting, { square } from "./utils.js";

const greet = greeting("Ryan");
const exponential = square(5);

console.log(`${greet} => ${exponential}`);
