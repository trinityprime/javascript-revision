// Fetches a resource from the network and returns a promise that resolves with the response.

import fetch from "node-fetch";

const awaitResponse = async () => {
  const result = await fetch("https://wallhaven.cc/");
  const text = await result.text();
  console.log(text);
};

awaitResponse();
