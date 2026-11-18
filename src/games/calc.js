import readlineSync from "readline-sync";

const MAX_ROUNDS = 3;
const MAX_NUMBER = 100;
const playCalcGame = (name) => {
  const operators = ["+", "-", "*"];

  let isWinner = true;

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const randomIndex = Math.floor(Math.random() * operators.length);
    const operator = operators[randomIndex];

    const num1 = Math.floor(Math.random() * MAX_NUMBER) + 1;
    const num2 = Math.floor(Math.random() * MAX_NUMBER) + 1;

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      default:
        throw new Error(`Operador desconocido: ${operator}`);
    }

    console.log("¿Cuál es el resultado de la expresión?");
    console.log(`Pregunta: ${num1} ${operator} ${num2}`);
    const answer = Number(readlineSync.question("Tu respuesta: "));

    if (answer === result) {
      console.log("¡Correcto!");
    } else {
      console.log(
        `'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${result}'.`,
      );
      isWinner = false;
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      break;
    }
  }

  if (isWinner === true) {
    console.log(`¡Felicidades, ${name}!`);
  }
};
export default playCalcGame;
