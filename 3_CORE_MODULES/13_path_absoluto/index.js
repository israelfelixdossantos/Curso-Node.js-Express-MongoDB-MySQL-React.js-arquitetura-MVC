// Importa o módulo "path" para manipulação e análise de caminhos de arquivos e diretórios.
const path = require("path");

// Exibe o caminho absoluto do arquivo "teste.txt".
// "path.resolve" resolve um caminho relativo em um caminho absoluto com base no diretório de trabalho atual.
console.log(path.resolve("teste.txt"));
// Exemplo de saída (dependendo do diretório de execução): "/Users/usuario/projeto/teste.txt"

// Criação de um caminho de arquivo de forma dinâmica:

// Define o nome de uma pasta intermediária (relatórios) e o nome do arquivo final.
const midFolder = "relatorios";
const fileName = "relatorio.txt";

// Usa "path.join" para combinar os elementos e formar um caminho correto para o sistema operacional.
// "path.join" é seguro e adapta automaticamente os separadores de caminho entre diferentes sistemas operacionais.
const finalPath = path.join("/", "arquivos", midFolder, fileName);

// Exibe o caminho resultante. Isso forma um caminho absoluto ou relativo dependendo do contexto.
console.log(finalPath);
// Exemplo de saída: "/arquivos/relatorios/relatorio.txt"
