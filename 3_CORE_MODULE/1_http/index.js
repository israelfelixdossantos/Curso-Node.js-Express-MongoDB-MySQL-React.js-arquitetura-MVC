// Importa o módulo "http" do Node.js, que permite criar um servidor HTTP.
const http = require("http");

// Define a porta na qual o servidor vai escutar (neste caso, a porta 3000).
const port = 3000;

// Cria o servidor HTTP.
// A função de callback é executada toda vez que o servidor recebe uma requisição.
// `req` representa o pedido do cliente (request).
// `res` representa a resposta do servidor (response).
const server = http.createServer((req, res) => {
  // Escreve "Oi HTTP" no corpo da resposta para o cliente.
  res.write("Oi HTTP");

  // Finaliza a resposta, indicando que o servidor concluiu o envio dos dados.
  res.end();
});

// Faz o servidor "escutar" na porta definida.
// A função de callback é executada quando o servidor começa a funcionar.
server.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está ativo.
  console.log(`Servidor rodando na porta: ${port}`);

  // Exibe o link para acessar o servidor no navegador ou em um cliente HTTP.
  console.log(`Acesse via http://localhost:${port}/`);
});
