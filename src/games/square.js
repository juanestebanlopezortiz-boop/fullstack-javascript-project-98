import readlineSync from "readline-sync";

const MAX_ROUNDS = 3;
const MAX_NUMBER = 100;

const playSquareGame = (name) => {
  console.log("Escribe el cuadrado del número mostrado.");

  let isWinner = true;
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * MAX_NUMBER) + 1;
    const correctAnswer = number * number;

    console.log(`Pregunta: ${number}`);
    const answer = Number(readlineSync.question("Tu respuesta: "));

    if (answer === correctAnswer) {
      console.log("¡Correcto!");
    } else {
      console.log(
        `'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`,
      );
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      isWinner = false;
      break;
    }
  }

  if (isWinner === true) {
    console.log(`¡Felicidades, ${name}!`);
  }
};

export default playSquareGame;
