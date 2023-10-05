// ternary operator (? :), used to replace if else statements to check 1 thing ONLY
// MUST be a pair, cannot have '?' and exclude ':' unlike if else statements

//  ex1
const happy = true;
happy === false ? console.log("Yay!") : console.log("Boo!");

//  ex2

const trigger = (bool) => {
  return bool === true ? "Based" : "Cringe";
};

const darlingInTheFranxx = trigger(true);
const showMaker = trigger(false);

console.log(darlingInTheFranxx, showMaker);

//  ex3 (simplification of ex2)
// you can remove curly brackets and return if only 1 parameter and 1 statement!

const trigger2 = (bool) => (bool === true ? "Based" : "Cringe");

const gurenLagaan = trigger2(true);
const hasaGi = trigger2(false);

console.log(darlingInTheFranxx, showMaker);
