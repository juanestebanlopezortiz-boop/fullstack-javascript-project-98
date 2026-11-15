import readlineSync from "readline-sync";

const laBienvenida = () => {
  const name = readlineSync.question("¿Cuál es tu nombre? ");
  console.log(`¡Hola, ${name}!`);
};

export default laBienvenida;
