import { b } from "./moduleB.js";

console.log("MAIN");

// basically, logs out Module A, then Module B, then MAIN
// because, it follows the imports.
// it goes from main.js => moduleB.js => moduleA.js until there are no more imports.
// then it logs out the code in the first export file, then going in reverse again, logging out whatever there is to log.
