// Importa o módulo "http" do Node.js para criar o servidor HTTP.
const http = require("http");

// Define a porta na qual o servidor irá escutar (neste caso, 3000).
const port = 3000;

// Cria o servidor HTTP.
// A função de callback será executada toda vez que o servidor receber uma requisição.
// `req` representa o pedido do cliente (request).
// `res` representa a resposta do servidor (response).
const server = http.createServer((req, res) => {
  // Importa o módulo "url" e analisa a URL da requisição.
  // `true` como segundo argumento converte a query string em um objeto.
  const utlInfo = require("url").parse(req.url, true);

  // Obtém o valor do parâmetro "name" da query string.
  const name = utlInfo.query.name;

  // Define o status HTTP como 200 (OK).
  res.statusCode = 200;

  // Configura o cabeçalho da resposta indicando que o conteúdo será HTML.
  res.setHeader("Content-Type", "text/html");

  // Verifica se o parâmetro "name" foi fornecido na URL.
  if (!name) {
    // Se "name" não foi fornecido, retorna um formulário HTML para que o usuário insira seu nome.
    res.end(
      "<h1>Preencha o seu Nome: </h1>" +
        '<form method="GET">' +
        '<input type="text" name="name"></input>' +
        '<input type="submit" value="Enviar"></input>' +
        "</form>"
    );
  } else {
    // Se "name" foi fornecido, exibe uma mensagem de boas-vindas personalizada.
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
  }
});

// Faz o servidor escutar na porta especificada.
// Exibe uma mensagem no console quando o servidor começa a funcionar.
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
  console.log(`Acesse via http://localhost:${port}/`);
});
