import readlineSync from "readline-sync";

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const MAX_ROUNDS = 3;
const MAX_NUMBER = 100;
const playGcdGame = (name) => {
  let isWinner = true;
  console.log("Encuentra el máximo común divisor de los números dados.");

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const num1 = Math.floor(Math.random() * MAX_NUMBER) + 1;
    const num2 = Math.floor(Math.random() * MAX_NUMBER) + 1;
    const correctAnswer = getGcd(num1, num2);

    console.log(`Pregunta: ${num1} ${num2}`);
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

  if (isWinner) {
    console.log(`¡Felicidades, ${name}!`);
  }
};

export default playGcdGame;
