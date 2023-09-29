// //  Q1

// const fetchPokemon = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { name: "Pikachu", power: 20 } });
//     }, 2000);
//   });
// };

// const getPokemon = async () => {
//   try {
//     const result = await fetchPokemon();
//     console.log("All clear!");
//     console.log(result);
//   } catch (error) {
//     console.log("Danger! Danger!");
//     console.log(error);
//   }
// };

// console.log("Start");
// getPokemon();
// console.log("End.");

// //  Q2

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: "Monkey", admin: false } });
//     }, 3000);
//   });
// };

// const login = (object) => {
//   if (object.admin == true) {
//     console.log("Logged in!");
//   } else {
//     console.log("Loser.");
//   }
// };

// console.log("Program starting...");

// const progStart = async () => {
//   const result = await fetchUser();
//   console.log(result);
//   login(result.data);
// };

// progStart();
// console.log("Program complete!");

// //  Q3

// const fetchFast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fast Done!");
//     }, 2000);
//   });
// };

// const fetchSlow = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Slow Done!");
//     }, 3000);
//   });
// };

// console.log("Starting...");

// const firstTime = new Date();

// const fetchAll = async () => {
//   const fast = await fetchFast();
//   const slow = await fetchSlow();
//   const fastSlow = await Promise.all([fast, slow]);
//   console.log(fastSlow);

//   const secondTime = new Date();
//   const timeElapsed = secondTime - firstTime;
//   console.log(timeElapsed, "ms");
// };

// fetchAll();
// console.log("Done!");

//  Q4

const getCandy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
      console.log("Candy..")
    }, 2000);
  });
};

const sellCandy = (object) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * object.quantity);
      console.log("Sold!")
    }, 3000);
  });
};

const calculate = async () => {
  const result = await getCandy();
  const final = await sellCandy(result);
  console.log(final);
};

calculate();
