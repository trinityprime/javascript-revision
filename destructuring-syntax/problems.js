//  Q1

const jungle = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"];

const [, lion, , rabbit] = jungle;

console.log(lion, rabbit);

//  Q2

const snacks = {
  chips: { name: "Pringles", salty: true },
  candy: { name: "Twizzlers", salty: false },
  chocolate: { name: "Mars!", salty: false },
};

const { candy, fruit = { name: "Banana", salty: false } } = snacks;

console.log(candy);
console.log(fruit);

//  Q3

const store = new Map();

store.set("Cups", 46);
store.set("Candles", 121);
store.set("Vases", 15);

for (const [product, price] of store) {
  console.log(`${product} => ${price}`);
}

//  Q4

const xyzCalc = ({ x, y, z }) => {
  console.log(5 * x - 2 * y - z);
};

xyzCalc({ x: 20, y: 2, z: 7 });
xyzCalc({ x: 2, y: 1, z: 20 });
xyzCalc({ x: 100, y: 100, z: 100 });
