// //  Q1

// import fetch from "node-fetch";

// const fetchAPI = async () => {
//   const website = await fetch("https://www.riotgames.com/en");
//   const text = await website.text();
//   console.log(text);
// };

// // fetchAPI();

// //  Q2

// const fetchJSON = async () => {
//   const website = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const json = await website.json();
//   console.log(json);
//   console.log(typeof json);
//   console.log(json.title);
// };

// fetchJSON();

// //  Q3

// const fetchPokemon = async () => {
//   const pikachu = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//   const fetchJSON = await pikachu.json();
//   console.log(fetchJSON.sprites.other["official-artwork"].front_shiny);
// };

// fetchPokemon();

//  Q4

import fs from "fs/promises";

const fetchImage = async () => {
  const image = await fetch("https://w.wallhaven.cc/full/ex/wallhaven-exel8o.jpg");
  const jpg = await image.blob();
  const buffer = Buffer.from(await jpg.arrayBuffer());
  await fs.writeFile("kafka.jpg", buffer);
};

fetchImage();
