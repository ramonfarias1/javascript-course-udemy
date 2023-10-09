/*
{
  "name": "3-npm-node-package-manager",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
*/

//# Regras para o nome da pasta do projeto e do projeto:
//# ----------------------------------------------------

// Não colocar espaço
// Não colocar acento
// Não colocar nome de algum módulo, como por exemplo: webpack, express, babeljs e etc.

//# Gerenciando versões de pacotes
//# ------------------------------

// "dependencies": {
//   "express": "^4.    18.   2"
//                major.minor.patch
// }

// Major: Alterações que não são compativeis com versões anteriores.

// Minor: Novos Recursos compativeis com versões anteriores.

// Patch: Correção de Bugs, melhoria de Desempenho/ambiente ou ajustes internos.

//# Atualizando as versões dos pacotes instalados:
// O comando "npm update" atualiza a versão minor e patch de todos os pacotes para a sua versão mais recente.
//! Nota: A versão Major nunca é atualizada com esse comando, para fazer isso é apenas desinstalando e instalando o pacote para sua versão major mais recente.

//# Acento circunflexo(^):
// Serve para indicar ao npm para sempre atualizar a versão minor e patch de um pacote para a sua versão mais recente ao utilizar o comando "npm update" ou ao instalar um pacote.

//# Til(~):
// Serve para ataulizar apenas a versão de patch dos pacotes

//# Parando atualizações de um determinado pacote:
// Utilize o comando "-E" na hora da instalação de um pacote para baixar a versão mais recente e fazer com que o mesmo não receba mais atualizações e assim usar pra sempre aquela versão baixada na hora da instalação. Exemplo de uso: "npm install express -E". Ou então simplesmente remova o acento circunflexo(^).

//# Instalando uma versão específica de um pacote:

// "npm install nome-do-pacote@2.0.0"
// "npm install nome-do-pacote@4.x"

//# Listando pacotes instalados:

// "npm ls"
// "npm ls --depth=0"

//# Ver quais pacotes estão desatualizados:

// "npm outdated" // Só funciona se tiver algum pacote desatualizado

//# Colocando um pacote em DevDependencies:

// Diferença entre Dependencies e DevDependencies:

// Dependencies: Dependências são aquelas utilizadas no produto final, que o produto depende delas para funcionar alguma função, estilo ou outras coisas.

// DevDependencies: Dependências de dev são aquelas utilizadas apenas durante o desenvolvimento de um projeto e não são necessárias para a execução do projeto em produção. Elas podem incluir ferramentas de teste, linters, plugins de desenvolvimento e outras ferramentas que ajudam os desenvolvedores a criar e testar o código de maneira eficiente.

// Utilize o comando "npm install --save-dev nome-do-pacote" para colocado como Dependência de Dev. Exemplo de uso: "npm install --save-dev express".

// Para colocado somente como Dependencie, utilize o comando "npm install --save-prod nome-do-pacote". Exemplo de uso: "npm install --save-prod express".