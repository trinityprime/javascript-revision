// es-modules => separate and organise code (split code into multiple files)

const character = {
  name: "Geralt",
  job: "Witcher",
  sword: ["Silver", "Steel"],
};

const printCharacter = () => {
  console.log(character.name);
};

const timeoutCharacter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(character);
    }, 2000);
  });
};

const exportCharacter = await timeoutCharacter();

export { exportCharacter };
export default printCharacter;
