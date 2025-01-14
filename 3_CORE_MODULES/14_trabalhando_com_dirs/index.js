// Importa o módulo "fs" (File System) para manipulação de arquivos e diretórios no sistema.
const fs = require("fs");

// Verifica se o diretório "minhapasta" existe no sistema.
if (!fs.existsSync("./minhapasta")) {
  // Se o diretório não existir, exibe a mensagem "Não existe".
  console.log("Não existe");

  // Cria o diretório "minhapasta" de forma síncrona.
  fs.mkdirSync("minhapasta");
} else {
  // Se o diretório já existir, exibe a mensagem "Existe!".
  console.log("Existe!");
}
