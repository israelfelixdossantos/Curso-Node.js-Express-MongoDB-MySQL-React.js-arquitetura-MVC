// Importa o módulo "http" para criar o servidor.
const http = require("http");

// Importa o módulo "fs" para manipulação de arquivos.
const fs = require("fs");

// Define a porta na qual o servidor será executado.
const port = 3000;

// Cria um servidor HTTP.
const server = http.createServer((req, res) => {
  // Importa o módulo "url" para analisar a URL da requisição e seus parâmetros.
  const urlInfo = require("url").parse(req.url, true);

  // Obtém o valor do parâmetro "name" na query string da URL.
  const name = urlInfo.query.name;

  // Verifica se o parâmetro "name" está ausente.
  if (!name) {
    // Lê o arquivo "index.html" no sistema de arquivos.
    fs.readFile("./index.html", function (err, data) {
      // Configura o cabeçalho da resposta com o status 200 (OK) e o tipo de conteúdo como "text/html".
      res.writeHead(200, { "content-type": "text/html" });

      // Escreve o conteúdo do arquivo "index.html" na resposta.
      res.write(data);

      // Finaliza a resposta.
      return res.end();
    });
  } else {
    // Escreve o valor do parâmetro "name" no arquivo "arquivo.txt".
    fs.writeFile("arquivo.txt", name, function (err, data) {
      // Redireciona o navegador de volta para a raiz ("/") com o status 302.
      res.writeHead(302, {
        Location: "/",
      });

      // Finaliza a resposta.
      return res.end();
    });
  }
});

// Faz o servidor escutar na porta especificada.
server.listen(port, () => {
  // Exibe no console uma mensagem indicando que o servidor está rodando.
  console.log(`Servidor rodando na porta: ${port}`);
  console.log(`Acesse via http://localhost:${port}/`);
});
