//  Q1

const mexico = new Map();

mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set("neighbours", ["USA", "Guatemala", "Belize"]);

console.log(mexico);

mexico.set("id", 25);
mexico.get("neighbours").push("Honduras");
console.log(mexico);

//  Q2

const myPet = new Map();

myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);

console.log(myPet);

myPet.set("colour", "black");
myPet.set("breed", "Beagle");
myPet.get("friends").splice(2);
console.log(myPet);

myPet.get("friends").push("Chip");
console.log(myPet);

//  Q3

const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);
console.log(store);

const fruits = store.get("products");
console.log(fruits);

const oneFruit = store.get("products")[2];
console.log(oneFruit);

store.get("products")[0].price = 1.75;
console.log(banana);
console.log(store);

candy.price = 4.99;
console.log(candy);
console.log(store);

//  Q4

const houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

console.log(houseForSale);

houseForSale.delete("built");
houseForSale.get("owner").age = 30;

const maxOffer = houseForSale.get("offers").reduce((bestOffer, offer) => {
  if (bestOffer < offer) {
    return offer;
  }
  return bestOffer;
}, 0);

houseForSale.set("sale price", 312000);

console.log(houseForSale);
console.log(maxOffer);

//  Q5

const myConsole = new Map();

myConsole.set("log", (message) => {
  console.log(message);
});

myConsole.set(1, "number one");
myConsole.set("1", "string one");

myConsole.get("log")("Bratty!");
console.log(myConsole);

//  Q6

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const seenNumbers = new Map();

for (let i = 0; i < numbers.length; i++) {
  if (seenNumbers.has(numbers[i])) {
    console.log(i, seenNumbers.get(numbers[i]));
  } else {
    seenNumbers.set(numbers[i], i);
  }
}

console.log(seenNumbers);
