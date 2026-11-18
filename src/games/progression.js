import readlineSync from "readline-sync";

const MAX_ROUNDS = 3;
const playProgressionGame = (name) => {
  console.log("¿Qué número falta en la progresión?");
  const progressionLength = 10;

  let isWinner = true;

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const start = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const missingIndex = Math.floor(Math.random() * progressionLength);

    const progression = [];
    for (let j = 0; j < progressionLength; j += 1) {
      if (j === missingIndex) {
        progression.push("..");
      } else {
        progression.push(start + j * step);
      }
    }
    console.log(`Pregunta: ${progression.join(" ")}`);
    const answer = Number(readlineSync.question("Tu respuesta: "));
    if (answer === start + missingIndex * step) {
      console.log("Correcto!");
    } else {
      console.log(`Incorrecto. La respuesta correcta es ${start + missingIndex * step}`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      isWinner = false;
      break;
    }
  }

  if (isWinner === true) {
    console.log(`¡Felicidades, ${name}!`);
  }
};
export default playProgressionGame;
