const x = "10";

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não e um numero inteiro");
}

console.log("Continuando o codigo...");

//throw encerra o programa.
