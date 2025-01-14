// Importa o módulo "fs" (File System) para manipulação de arquivos.
const fs = require("fs");

// Usa o método "rename" para renomear um arquivo.
// O primeiro parâmetro é o nome original do arquivo ("arquivo.txt").
// O segundo parâmetro é o novo nome que será dado ao arquivo ("novoarquivo.txt").
// O terceiro parâmetro é uma função de callback que trata o resultado da operação.
fs.rename("arquivo.txt", "novoarquivo.txt", (err) => {
  // Verifica se ocorreu algum erro durante a operação.
  if (err) {
    // Exibe a mensagem de erro no console, caso haja.
    console.log(err);

    // Sai da função, interrompendo a execução do restante do código.
    return;
  }

  // Se o arquivo foi renomeado com sucesso, exibe uma mensagem no console.
  console.log("Arquivo renomeado");
});
