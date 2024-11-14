var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um numero?", (n1) => {
  readline.question("Digite outro numero?", (n2) => {
    let soma = parseFloat(n1) + parseFloat(n2);
    console.log("A soma dos numeros é " + soma);
    readline.close();
  });
});
