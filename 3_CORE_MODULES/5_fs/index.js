// Importa o módulo "http" para criar um servidor.
const http = require("http");

// Importa o módulo "fs" para manipulação de arquivos.
const fs = require("fs");

// Define a porta em que o servidor vai escutar.
const port = 3000;

// Cria um servidor HTTP.
const server = http.createServer((req, res) => {
  // Lê o arquivo "mensagem.html" no sistema de arquivos.
  fs.readFile("./mensagem.html", function (err, data) {
    // Configura o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo como "text/html".
    res.writeHead(200, { "content-type": "text/html" });

    // Escreve o conteúdo do arquivo "mensagem.html" na resposta.
    res.write(data);

    // Finaliza a resposta.
    return res.end();
  });
});

// Faz o servidor escutar na porta definida.
server.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está rodando.
  console.log(`Servidor rodando na porta: ${port}`);
  console.log(`Acesse via http://localhost:${port}/`);
});
