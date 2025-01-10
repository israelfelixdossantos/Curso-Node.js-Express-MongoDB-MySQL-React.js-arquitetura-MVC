// Importa o módulo "http" do Node.js, que permite criar um servidor HTTP.
const http = require("http");

// Define a porta na qual o servidor vai escutar (neste caso, a porta 3000).
const port = 3000;

// Cria o servidor HTTP usando o módulo "http".
// A função de callback será executada toda vez que o servidor receber uma requisição.
// `req` (request) contém informações sobre a requisição do cliente.
// `res` (response) é usado para enviar uma resposta ao cliente.
const server = http.createServer((req, res) => {
  // Define o status da resposta HTTP como 200 (OK), indicando que a requisição foi bem-sucedida.
  res.statusCode = 200;

  // Configura o cabeçalho da resposta para indicar o tipo de conteúdo.
  // Neste caso, "text/html" informa que o conteúdo é HTML.
  res.setHeader("Content-Type", "text/html");

  // Envia o corpo da resposta, que neste caso é um texto HTML.
  // Aqui usamos `<h1>` para exibir um título.
  res.end("<h1>Olá, este é meu servidor com HTML</h1>");
});

// Faz o servidor "escutar" na porta definida.
// A função de callback é executada quando o servidor começa a funcionar.
server.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está ativo.
  console.log(`Servidor rodando na porta: ${port}`);

  // Exibe o link para acessar o servidor no navegador ou em um cliente HTTP.
  console.log(`Acesse via http://localhost:${port}/`);
});
