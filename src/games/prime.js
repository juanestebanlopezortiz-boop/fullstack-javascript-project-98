import readlineSync from "readline-sync";

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeGame = (name) => {
  console.log('Responde "yes" si el número es primo. De lo contrario, responde "no".');

  let isWinner = true;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;

    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question("Tu respuesta: ");

    let correctAnswer;
    if (isPrime(number)) {
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
export default playPrimeGame;
