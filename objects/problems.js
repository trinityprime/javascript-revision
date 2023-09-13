//  Q1

const mexico = {
  id: 24,
  name: "Mexico",
  capital: "Mexico City",
  neighbours: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);
mexico.id = 25;
mexico.neighbours.push("Honduras");
console.log(mexico);

//  Q2

const myPet = {
  name: "Sudo",
  type: "Dog",
  breed: "Poodle",
  age: 7,
  friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);
myPet.colour = "black";
myPet.type = "Cat";
myPet.friends.splice(2);
console.log(myPet);
myPet.friends.push("Chip");
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

const store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};

console.log(store);
console.log(store.products);
console.log(store.products[2]);

store.products[0].price = 1.75;
console.log(store);
console.log(banana);

candy.price = 4.99;
console.log(store);
console.log(candy);

//  Q4

const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: {
    name: "Blake",
    age: 29,
  },
  offers: [290000, 295000, 315000, 312000],
};

const highestOffer = houseForSale.offers.reduce((bestOffer, offer) => {
  if (bestOffer < offer) {
    return offer;
  }
  return bestOffer;
}, 0);

console.log(houseForSale);

delete houseForSale.built;
houseForSale.owner.age = 30;

console.log(houseForSale);
console.log(highestOffer);

//  Q5

const myConsole = {
  log: (message) => {
    console.log(message);
  },
};

myConsole.log("Yo!");
