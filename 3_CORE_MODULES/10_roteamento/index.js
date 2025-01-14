// Importa o módulo "http" para criar um servidor HTTP.
const http = require("http");

// Importa o módulo "fs" para manipulação de arquivos no sistema.
const fs = require("fs");

// Importa o módulo "url" para analisar e manipular a URL das requisições.
const url = require("url");

// Define a porta onde o servidor será executado.
const port = 3000;

// Cria o servidor HTTP.
const server = http.createServer((req, res) => {
  // Analisa a URL da requisição e obtém informações detalhadas.
  const q = url.parse(req.url, true);

  // Remove a barra inicial da URL para obter o nome do arquivo solicitado.
  const filename = q.pathname.substring(1);

  // Verifica se o nome do arquivo contém a extensão ".html".
  if (filename.includes("html")) {
    // Checa se o arquivo existe no sistema.
    if (fs.existsSync(filename)) {
      // Se o arquivo existe, lê seu conteúdo.
      fs.readFile(filename, (err, data) => {
        // Define o cabeçalho da resposta com status 200 (OK) e tipo de conteúdo "text/html".
        res.writeHead(200, { "content-type": "text/html" });

        // Escreve o conteúdo do arquivo na resposta.
        res.write(data);

        // Finaliza a resposta.
        return res.end();
      });
    } else {
      // Se o arquivo não existe, exibe a página "404.html".
      fs.readFile("404.html", (err, data) => {
        // Define o cabeçalho da resposta com status 404 (Not Found) e tipo de conteúdo "text/html".
        res.writeHead(404, { "content-type": "text/html" });

        // Escreve o conteúdo da página "404.html" na resposta.
        res.write(data);

        // Finaliza a resposta.
        return res.end();
      });
    }
  }
});

// Faz o servidor escutar na porta especificada.
server.listen(port, () => {
  // Exibe no console uma mensagem indicando que o servidor está rodando.
  console.log(`Servidor rodando na porta: ${port}`);
  console.log(`Acesse via http://localhost:${port}/`);
});
