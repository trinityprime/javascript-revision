//  Q1

const baboon = Symbol("Monkey");

const gorilla = Symbol("Monkey");

console.log(typeof gorilla);
console.log(typeof baboon);

console.log(baboon, gorilla);

console.log(baboon === gorilla);

//  Q2

const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
  [Symbol("budget")]: 30,
  [Symbol("boxOffice")]: 41.6,
};

for (const [key, value] of Object.entries(movie)) {
  console.log(`${key} => ${value}`);
}

//  Q3

const book = {
  name: 1984,
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

book[Symbol.iterator] = function* () {
  // iterate through object
  const entries = Object.entries(book);
  for (const entry of entries) {
    yield entry;
  }
};

for (const entry of book) {
  console.log(entry);
}

//  Q4

const newBook = {
  name: 1984,
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

newBook[Symbol.asyncIterator] = async function* () {
  // async await
  const entries = Object.entries(newBook);
  for (const entry of entries) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 150);
    });
  }
};

for await (const [key, value] of newBook) {
  console.log(key, value);
}
