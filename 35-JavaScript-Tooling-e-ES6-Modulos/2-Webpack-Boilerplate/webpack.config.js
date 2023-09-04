const path = require('path');
// "path" é um módulo do node que facilita o trabalho com caminhos de arquivos e diretórios

module.exports = {
    mode: 'development', // Ao definir o parâmetro "mode" como "development", "production" ou "none", você pode ativar as otimizações integradas do webpack que correspondem a cada ambiente. O valor padrão é "production".

    entry: './src/index.js', // A chave "entry(entrada)" indica qual módulo o webpack deve usar para começar a construir seu gráfico de dependência interna. O Webpack descobrirá de quais outros módulos e bibliotecas esse ponto de entrada(entry) depende (direta e indiretamente).

    // Por padrão, seu valor é "./src/index.js", mas você pode especificar pontos de entrada(entries) diferentes (ou múltiplos) definindo uma propriedade de entrada na configuração do webpack.
};