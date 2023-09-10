// while loops

let i = 0;

while (i < 3) {
  console.log("I will not feed.");
  i++;
}
console.log(":)");

// for loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let str = "apple", num = 0; str !== "banana"; num++) {
  if (num === 5) {
    str = "banana";
  }
  console.log(num);
}
