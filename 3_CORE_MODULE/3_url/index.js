// Importa o módulo "url" do Node.js, que fornece ferramentas para trabalhar com URLs.
const url = require("url");

// Define uma URL como string. Esta URL será analisada (parsed) para extrair suas partes.
const address = "https://www.meusite.com.br/catalogog?produtos=cadeira";

// Cria um objeto de URL a partir da string fornecida usando a classe `URL` do módulo "url".
// Isso permite acessar diferentes partes da URL de forma estruturada.
const parsedUrl = new url.URL(address);

// Exibe o host da URL (inclui domínio e porta, se especificada).
// No exemplo, o host é "www.meusite.com.br".
console.log(parsedUrl.host);

// Exibe o caminho (path) da URL após o domínio.
// No exemplo, o pathname é "/catalogog".
console.log(parsedUrl.pathname);

// Exibe a parte da URL que contém a "query string" (os parâmetros após o `?`).
// No exemplo, o search é "?produtos=cadeira".
console.log(parsedUrl.search);

// Exibe os parâmetros de busca como um objeto de `URLSearchParams`.
// Isso permite manipular os parâmetros da URL de forma mais conveniente.
console.log(parsedUrl.searchParams);

// Obtém o valor do parâmetro "produtos" da query string usando o método `.get()`.
// No exemplo, o valor retornado é "cadeira".
console.log(parsedUrl.searchParams.get("produtos"));
