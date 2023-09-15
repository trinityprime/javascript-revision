// maps => better version of objects.

//  ex1

const map = new Map();
console.log(map);

map.set("name", "Nader"); // key can be any value (functions, objects, integerss)
console.log(map);

map.set("age", 20);
console.log(map);

const age = map.get("age");
console.log(age);

map.set("age", 21);
console.log(map);

console.log(map.has("age")); // true
console.log(map.has("car")); // false

console.log(map.size);
