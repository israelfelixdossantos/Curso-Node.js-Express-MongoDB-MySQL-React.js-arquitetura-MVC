const chalk = require("chalk");

const nota = 5;

if (nota >= 7) {
  console.log(chalk.green("Parabens voce foi aprovado"));
} else {
  console.log(chalk.bgRed.black("Reprovado"));
}
