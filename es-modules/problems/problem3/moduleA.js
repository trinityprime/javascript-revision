import { topMovies } from "./moduleB.js";

const checkMovie = (movie) => {
  if (topMovies.includes(movie)) {
    return true;
  } else {
    return false;
  }
};

export { checkMovie };
