// sets => allow you to store [unique] values of any type (primitive types/object ref)

//  ex1

const initSet = new Set();

initSet.add(10);
initSet.add(20);
initSet.add(30);
initSet.add("Fourty");

console.log(initSet);

initSet.delete(20);

console.log(initSet);
console.log(initSet.has(30));
console.log(initSet.has(300));
console.log(initSet.size);
