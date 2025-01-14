// Importa o módulo "path" para manipulação e análise de caminhos de arquivos e diretórios.
const path = require("path");

// Define um caminho personalizado para análise.
const customPath = "/relatorios/israel/relatorios.pdf";

// Obtém o diretório do caminho especificado.
// "path.dirname" retorna a parte do caminho antes do nome do arquivo.
console.log(path.dirname(customPath));
// Saída: "/relatorios/israel"

// Obtém o nome base (arquivo com extensão) do caminho especificado.
// "path.basename" retorna apenas o nome do arquivo, incluindo sua extensão.
console.log(path.basename(customPath));
// Saída: "relatorios.pdf"

// Obtém a extensão do arquivo no caminho especificado.
// "path.extname" retorna apenas a extensão do arquivo (incluindo o ponto).
console.log(path.extname(customPath));
// Saída: ".pdf"
