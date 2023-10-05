//  Q1

const hungry = true;

hungry === true ? console.log("Cookies!") : console.log("No cookies for you!");

//  Q2

const over9000 = (num) => (num > 9000 ? "Over 9000!" : "Taking a Nappa...");

const result = over9000(9999);
console.log(result);

//  Q3

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"];

const alter = wizards.map((wizard) =>
  wizard.includes("n") ? wizard.replace("n", "*") : wizard.toUpperCase()
);

console.log(alter);

//  Q4

const characters = [
  "Han Solo",
  "Spock",
  "Darth Vader",
  "Yoda",
  "Neo",
  "Sarah Connor",
];

const filterChar = characters.filter((char) =>
  char.includes(" ") ? true : false
);

console.log(filterChar);
