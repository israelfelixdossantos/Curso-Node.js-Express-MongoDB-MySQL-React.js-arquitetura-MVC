// Importa o módulo "fs" (File System) para manipulação de arquivos no sistema.
const fs = require("fs");

// Usa o método "stat" para obter informações sobre o arquivo especificado ("novoarquivo.txt").
fs.stat("novoarquivo.txt", (err, stats) => {
  // Verifica se ocorreu algum erro ao tentar acessar as informações do arquivo.
  if (err) {
    // Exibe a mensagem de erro no console, caso haja.
    console.log(err);

    // Sai da função, interrompendo a execução do restante do código.
    return;
  }

  // Verifica se o caminho especificado é um arquivo regular e exibe o resultado (true/false).
  console.log(stats.isFile());

  // Verifica se o caminho especificado é um diretório e exibe o resultado (true/false).
  console.log(stats.isDirectory());

  // Verifica se o caminho especificado é um link simbólico e exibe o resultado (true/false).
  console.log(stats.isSymbolicLink());

  // Exibe a data e hora da última alteração (ctime - change time) do arquivo.
  console.log(stats.ctime);

  // Exibe o tamanho do arquivo em bytes.
  console.log(stats.size);
});
