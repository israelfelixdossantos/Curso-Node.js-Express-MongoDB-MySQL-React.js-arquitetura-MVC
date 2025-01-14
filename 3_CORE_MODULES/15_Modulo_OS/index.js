// Importa o módulo "os" que fornece informações sobre o sistema operacional.
const os = require("os");

// Exibe informações sobre os núcleos de CPU do sistema.
// "os.cpus()" retorna um array com informações sobre cada núcleo de CPU, como modelo e arquitetura.
console.log(os.cpus());

// Exibe a quantidade de memória livre no sistema.
// "os.freemem()" retorna o valor da memória livre (em bytes).
console.log(os.freemem());

// Exibe o diretório inicial do usuário.
// "os.homedir()" retorna o caminho para o diretório home do usuário atual no sistema.
console.log(os.homedir());

// Exibe o tipo de sistema operacional.
// "os.type()" retorna o tipo de sistema operacional (por exemplo, "Linux", "Darwin" para macOS, "Windows_NT" para Windows).
console.log(os.type());
