// functions
//  ex1

const object = () => {
  console.log("box");
};
object();


//  ex2

const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(1, 2));

//  ex3

const printMany = (message, num) => {
  for (let i = 0; i < num; i++) {
    console.log(message);
  }
  return "end";
};
console.log(printMany("IfElse", 5));
