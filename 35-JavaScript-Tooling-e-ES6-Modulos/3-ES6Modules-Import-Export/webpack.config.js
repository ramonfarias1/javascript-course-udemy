const path = require('path'); // CommonJS
// "path" é um módulo do node que facilita o trabalho com caminhos de arquivos e diretórios

module.exports = {
    mode: 'development', // Ao definir o parâmetro "mode" como "development", "production" ou "none", você pode ativar as otimizações integradas do webpack que correspondem a cada ambiente. O valor padrão é "production".

    entry: './src/index.js', // A chave "entry(entrada)" indica qual módulo o webpack deve usar para começar a construir seu gráfico de dependência interna. O Webpack descobrirá de quais outros módulos e bibliotecas esse ponto de entrada(entry) depende (direta e indiretamente).

    // Por padrão, seu valor é "./src/index.js", mas você pode especificar pontos de entrada(entries) diferentes (ou múltiplos) definindo uma propriedade de entrada na configuração do webpack.

    output: { // A propriedade output informa ao webpack onde emitir os pacotes que ele cria e como nomear esses arquivos. O padrão é "./dist/main.js" para o arquivo de saída principal e "./dist" para a pasta para qualquer outro arquivo gerado.

        path: path.resolve(__dirname, 'public', 'assets', 'js'), // Aqui usamos o módulo "path" do node para que o caminho até o diretório seja compátivel com todos os sistemas operacionais

        filename: 'bundle.js'
    },

    module: { // Normalmente, o webpack só entende arquivos JavaScript e JSON. Os carregadores(loaders) permitem que o webpack processe outros tipos de arquivos e os converta em módulos válidos que podem ser consumidos pelo seu aplicativo e adicionados ao gráfico de dependência.

        rules: [{
            exclude: /node_modules/, // Exclui a pasta "node_modules" para que que ela não fique sendo análisada pelo webpack

            test: /\.js$/, // Essa propriedade identifica qual arquivo ou arquivos devem ser transformados.

            use: { // A propriedade indica qual carregador(loader) deve ser usado para fazer a transformação.

                loader: 'babel-loader', // Aqui usamos o carregador(loader) do babel para tornar o código do arquivo "index.js" compatível com navegadores antigos.

                options: { // Define opções/configurações do loader

                    presets: ['@babel/env'] // Define dentro de um array qual/quais presets do loader usar
                }
            }
        }]
    },

    devtool: 'source-map' // Essa opção controla se e como os mapas de origem são gerados. (ver logs de erros mais precisos e etc...).
};

//# Após terminar de configurar é só executar o webpack com o comando:
// npx webpack -w
//# Ou então criar um script para esse comando no arquivo "package.json".