const fs = require("fs");

console.log("Inicio");

fs.writeFile("arquivo_assincrono.txt", "oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo Criado!");
  }, 1000);
});

console.log("Fim");
