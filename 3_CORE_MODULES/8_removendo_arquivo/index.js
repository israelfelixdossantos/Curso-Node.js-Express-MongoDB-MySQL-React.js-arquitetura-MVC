// Importa o módulo "fs" (File System) para manipulação de arquivos.
const fs = require("fs");

// Usa o método "unlink" para deletar o arquivo especificado ("arquivo.txt").
fs.unlink("arquivo.txt", function (err) {
  // Verifica se ocorreu algum erro ao tentar remover o arquivo.
  if (err) {
    // Se houver um erro, exibe a mensagem de erro no console.
    console.log(err);

    // Sai da função, interrompendo a execução do restante do código.
    return;
  }

  // Caso não haja erros, exibe uma mensagem no console informando que o arquivo foi removido.
  console.log("Arquivo removido");
});
