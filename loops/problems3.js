//  Q1

const numbers = [10, 20, 40, 50, 20, 100];

for (const number of numbers) {
  console.log(number ** 2);
}

//  Q2

const ages = [10, 42, 15, 22, 11, 74, 39, 2];
let i = 1;

const results = [];

for (const age of ages) {
  results.push({ name: `Dragon ${i}`, age: age });
  i++;
}

console.log(results);

//  Q3

const names = new Set();

const capsNames = new Set();

names.add("Bilbo");
names.add("Hermoine");
names.add("Spock");
names.add("Leia");

for (const name of names) {
  capsNames.add(name.toUpperCase());
}

console.log(names);
console.log(capsNames);

//  Q4

const backpack = new Map();

backpack.set(1, { name: "Sword", value: 300 });
backpack.set(2, { name: "banana", value: 5 });
backpack.set(3, { name: "Gold Nugget", value: 10000 });
backpack.set(4, { name: "Pants", value: 100 });

let money = 0;

for (const items of backpack) {
  const loot = items[1];
  console.log(`${loot.name}: $${loot.value}`);
  money += loot.value;
}

console.log(`Total Value: $${money}`);
