// Importa o módulo "http" para criar um servidor HTTP.
const http = require("http");

// Importa o módulo "fs" para manipulação de arquivos no sistema.
const fs = require("fs");

// Define a porta onde o servidor será executado.
const port = 3000;

// Cria o servidor HTTP.
const server = http.createServer((req, res) => {
  // Importa o módulo "url" e analisa a URL da requisição, incluindo os parâmetros de consulta.
  const urlInfo = require("url").parse(req.url, true);

  // Obtém o valor do parâmetro "name" na query string da URL.
  const name = urlInfo.query.name;

  // Verifica se o parâmetro "name" está ausente.
  if (!name) {
    // Lê o arquivo "index.html" do sistema de arquivos.
    fs.readFile("./index.html", function (err, data) {
      // Configura o cabeçalho da resposta com status 200 (OK) e o tipo de conteúdo "text/html".
      res.writeHead(200, { "content-type": "text/html" });

      // Escreve o conteúdo do arquivo "index.html" na resposta.
      res.write(data);

      // Finaliza a resposta.
      return res.end();
    });
  } else {
    // Adiciona uma nova linha ao valor do parâmetro "name" para gravar no arquivo.
    const nameNewLine = name + ",\r\n";

    // Acrescenta o valor do "name" ao arquivo "arquivo.txt", sem sobrescrevê-lo.
    fs.appendFile("arquivo.txt", nameNewLine, function (err, data) {
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
