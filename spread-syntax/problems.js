//  Q1

const points = [10, 15, 20, 30, 5];

const pointsCopy = [...points, 50, 75];

console.log(points);
console.log(pointsCopy);

//  Q2

const views = [
  [5, 10, 20],
  [10, 20, 30],
];

const viewsCopy = [...views];

console.log(views);
console.log(viewsCopy);

viewsCopy[1].push(40);
viewsCopy[0].splice(2);
viewsCopy.push([100, 200]); // not added to original as it is not manipulating values already inside original.

console.log("------------");
console.log(views);
console.log(viewsCopy);

//  Q3

const animal = {
  name: "Koala",
  kingdom: "Australia",
  cute: true,
  friends: [
    {
      name: "Kangaroo",
      kingdom: "Australia",
    },
  ],
};

const koala = {
  ...animal,
  tail: false,
};

console.log(animal);
console.log(koala);

animal.cute = false; // since boolean is a primitive type, only changed in "animal" object

console.log(animal);
console.log(koala);

animal.friends[0].cute = false; // due to shallow copying, reference to koala

console.log(animal);
console.log(koala);

//  Q4

const superhero = {
  name: "BW",
  alias: "Batman",
  universe: "DC",
  happy: false,
  enemies: ["Joker", "Catwoman", "Bane"],
  bestMovie: {
    title: "The Dark Knight",
    rating: 95,
  },
};

const superCopy = {
  ...superhero,
  enemies: [...superhero.enemies, "Poison Ivy"],
  bestMovie: { ...superhero.bestMovie, year: 2008 },
};

// does not modify original, only modifies spread
console.log(superhero);
console.log(superCopy);
