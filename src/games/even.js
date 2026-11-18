import readlineSync from "readline-sync";

const MAX_ROUNDS = 3;
const MAX_NUMBER = 100;
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const playEvenGame = (name) => {
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let isWinner = true;
  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const number = Math.floor(Math.random() * MAX_NUMBER) + 1;

    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question("Tu respuesta: ");

    let correctAnswer;
    if (isEven(number)) {
      correctAnswer = "yes";
    } else {
      correctAnswer = "no";
    }

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
export default playEvenGame;
