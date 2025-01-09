const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stadin,
});

readline.question("Qual a sua linguagem preferida? ", (linguage) => {
  if (linguage === "Python") {
    console.log("Isso nem e linguagem!");
  }
  console.log(`A minha linguagem preferida é: ${linguage}`);
  readline.close;
});
