//  Q1

const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

console.log(numbers);

const arrayNumbers = [];

arrayNumbers.push(1);
arrayNumbers.push(2);
arrayNumbers.push(3);
arrayNumbers.push(4);
arrayNumbers.push(5);
arrayNumbers.push(2);
arrayNumbers.push(3);
arrayNumbers.push(4);

console.log(arrayNumbers);

//  Q2

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];
const setPoints = new Set();

for (let i = 0; i < points.length; i++) {
  setPoints.add(points[i]);
}

console.log(setPoints);

//  Q3

const values = [10, 20, 15, 30, 15, 20, 35, 60, 10];
const setValues = new Set();

const indentical = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (setValues.has(array[i])) {
      console.log(`First identical value: ${array[i]}`);
      break;
    }
    setValues.add(array[i]);
  }
};

indentical(values);

//  Q4

const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];

const results = [];

const duplicates = new Set();

const findingDupes = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (duplicates.has(items[i].name)) {
      continue;
    }
    results.push(items[i]);
    duplicates.add(items[i].name);
  }
};

findingDupes(items);
console.log(results);
console.log(duplicates);
