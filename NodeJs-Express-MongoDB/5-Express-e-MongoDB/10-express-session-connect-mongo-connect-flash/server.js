//# ----------------------------------------------
//# EXPRESS-SESSION, CONNECT-MONGO E CONNECT-FLASH
//# ----------------------------------------------

//# express-session

// O express-session é um middleware de sessão para o Express.js. Ele é uma biblioteca que simplifica o gerenciamento de sessões de usuário em aplicativos web. Em uma aplicação web típica, as sessões são usadas para rastrear a atividade de um usuário entre várias solicitações HTTP. Isso permite que você mantenha o estado da sessão do usuário, como informações de login, carrinho de compras em um site de comércio eletrônico, preferências do usuário, etc.

/* O express-session serve para várias finalidades importantes em um aplicativo web:

1. Gestão de sessões: Ele permite que você crie e gerencie sessões de usuário de forma eficaz. Cada usuário recebe um identificador único de sessão (geralmente um cookie) quando acessa o aplicativo, e os dados dessa sessão podem ser armazenados no servidor.

2. Armazenamento seguro de dados: Com o express-session, você pode armazenar dados sensíveis do usuário, como informações de login ou detalhes do carrinho de compras, no lado do servidor. Isso impede que os usuários acessem ou modifiquem diretamente esses dados no cliente.

3. Persistência de dados: O express-session permite que você configure diferentes mecanismos de armazenamento para as sessões. Você pode escolher armazenar as sessões em memória (útil para desenvolvimento), em um banco de dados, ou até mesmo em um armazenamento em cache como o Redis. Isso torna as sessões mais escaláveis e resilientes.

4. Controle de autenticação e autorização: Você pode usar o express-session para rastrear o estado de autenticação do usuário. Por exemplo, você pode criar uma sessão quando o usuário faz login e destruí-la quando o usuário faz logout. Isso permite controlar o acesso a recursos protegidos com base no estado da sessão.

5. Expiração de sessão: O express-session oferece a capacidade de definir uma expiração para as sessões. Isso é importante para melhorar a segurança e liberar recursos quando as sessões não são mais necessárias.

6. Proteção contra ataques de sessão: O middleware express-session também ajuda a proteger contra ataques de sessão, como falsificação de cookies, ao fornecer mecanismos para gerar e verificar identificadores de sessão seguros.

7. Personalização e configuração: Você pode personalizar e configurar o comportamento do express-session de acordo com os requisitos do seu aplicativo, como definir opções de cookie, tempo de vida da sessão, entre outros.
*/

// Para configurar o express-session de acordo com as preferências do seu aplicativo, consulte a documentação em: https://www.npmjs.com/package/express-session

//# connect-mongo

// Por padrão, o express-session armazena as sessões em memória, o que significa que as informações da sessão são perdidas quando o servidor é reiniciado. O connect-mongo é um middleware que estende as capacidades do express-session ao permitir que você armazene as informações da sessão no banco de dados MongoDB, em vez de na memória do servidor. Isso oferece a vantagem de persistência de dados, o que significa que as sessões do usuário não serão perdidas quando o servidor for reiniciado, escalonado ou atualizado.

// O connect-mongo trabalha como um adaptador entre o express-session e o MongoDB. Ele cria uma coleção no seu banco de dados MongoDB para armazenar as informações da sessão. Quando um usuário faz uma requisição, o express-session utiliza o connect-mongo para ler e gravar as informações da sessão no banco de dados.

/* Vantagens:

- Persistência de Sessão: As sessões do usuário são armazenadas de forma persistente no MongoDB.
- Escalabilidade: Permite escalonar a aplicação sem perder as sessões.
- Segurança: O MongoDB oferece recursos de segurança, tornando as informações de sessão mais seguras em comparação com o armazenamento em memória.
*/

// Para configurar o connect-mongo de acordo com as preferências do seu aplicativo, consulte a documentação em: https://www.npmjs.com/package/connect-mongo

//# connect-flash

// connect-flash é uma middleware para aplicativos web Node.js que é frequentemente usado em conjunto com frameworks como o Express.js. Ele fornece uma maneira simples de armazenar mensagens temporárias (geralmente mensagens de erro ou sucesso) que podem ser exibidas para os usuários após uma redirecionamento HTTP. O principal objetivo do connect-flash é permitir que você transmita mensagens de um middleware para outro durante o ciclo de vida de uma solicitação HTTP, tornando mais fácil a comunicação entre diferentes partes da aplicação.

/* Aqui está uma explicação mais detalhada do que é o connect-flash e para que ele serve:

1. Armazenamento temporário de mensagens: O connect-flash permite que você armazene mensagens temporárias na memória do servidor durante uma solicitação HTTP. Essas mensagens são frequentemente usadas para fornecer feedback ao usuário após uma ação, como enviar um formulário ou fazer login.

2. Redirecionamento e exibição de mensagens: Após o armazenamento de uma mensagem com o connect-flash, você pode redirecionar o usuário para outra página ou rota. Quando o usuário chega à nova página, a mensagem armazenada pode ser acessada e exibida para o usuário, geralmente como uma mensagem de sucesso ou erro.

3. Exemplo de uso comum: Imagine um cenário em que um usuário faz login em um site. Se o login for bem-sucedido, você pode usar o connect-flash para armazenar uma mensagem de sucesso temporária, como "Login bem-sucedido". Em seguida, você redireciona o usuário para a página inicial e exibe essa mensagem. Se o login falhar, você pode armazenar uma mensagem de erro temporária, como "Nome de usuário ou senha incorretos", e redirecionar o usuário para a página de login para exibir a mensagem de erro.

4. Middleware: O connect-flash é incorporado como um middleware em aplicativos Express.js. Isso significa que ele pode ser facilmente adicionado a um aplicativo existente usando o app.use(). Quando configurado corretamente, ele fornece um objeto req.flash() para definir e recuperar mensagens.
*/

// Para configurar o connect-flash de acordo com as preferências do seu aplicativo, consulte a documentação em: https://www.npmjs.com/package/connect-flash

require('dotenv').config();
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado na Banco de Dados!');
        app.emit('pronto');
    })
    .catch(error => console.log(error));

const session = require('express-session'); // importando express-session
const mongoStore = require('connect-mongo'); // importando connect-mongo
const connectFlash = require('connect-flash'); // importando connect-flash

const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({ // configuração express-session

    secret: process.env.SESSION_SECRET, /* Opção obrigatória
    
    Este é o segredo usado para assinar o cookie de ID de sessão. Pode ser uma string para um único segredo ou uma matriz de vários segredos. Se for fornecido um array de segredos, apenas o primeiro elemento será utilizado para assinar o cookie de ID de sessão, enquanto todos os elementos serão considerados na verificação da assinatura nas solicitações. O segredo em si não deve ser facilmente analisado por um humano e seria melhor ser um conjunto aleatório de caracteres. Uma prática recomendada pode incluir:
    
    - O uso de variáveis de ambiente para armazenar o segredo, garantindo que o segredo em si não exista em seu repositório.
    - Atualizações periódicas do segredo, garantindo ao mesmo tempo que o segredo anterior esteja na matriz.

    Usar um segredo que não pode ser adivinhado reduzirá a capacidade de sequestrar uma sessão a apenas adivinhar o ID da sessão (conforme determinado pela opção genid).
    
    Alterar o valor secreto invalidará todas as sessões existentes. Para girar o segredo sem invalidar as sessões, forneça uma matriz de segredos, com o novo segredo como primeiro elemento da matriz e incluindo segredos anteriores como elementos posteriores.
    */

    store: mongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }), // A instância de armazenamento de sessão, tem como padrão uma nova instância do MemoryStore.

    resave: false, /* Força a sessão a ser salva de volta no armazenamento de sessões, mesmo que a sessão nunca tenha sido modificada durante a solicitação. Dependendo da sua store, isso pode ser necessário, mas também pode criar condições de corrida onde um cliente faz duas solicitações paralelas ao seu servidor e as alterações feitas na sessão em uma solicitação podem ser substituídas quando a outra solicitação termina, mesmo que não tenha feito alterações (esse comportamento também depende de qual store você está usando).

    O valor padrão é true, mas o uso do padrão foi descontinuado, pois o padrão mudará no futuro. Pesquise essa configuração e escolha o que é apropriado para seu caso de uso. Normalmente, você desejará falso.
    
    Como posso saber se isso é necessário para minha store? A melhor forma de saber é verificar com sua store se ela implementa o método touch. Se isso acontecer, você pode definir com segurança resave: false. Se ele não implementar o método touch e sua store definir uma data de expiração para as sessões armazenadas, provavelmente será necessário salvar novamente: true.
    */

    saveUninitialized: false, /* Força uma sessão “não inicializada” a ser salva na store. Uma sessão não é inicializada quando é nova, mas não modificada. Escolher falso é útil para implementar sessões de login, reduzir o uso de armazenamento do servidor ou cumprir leis que exigem permissão antes de definir um cookie. Escolher falso também ajudará nas condições de corrida em que um cliente faz várias solicitações paralelas sem uma sessão.

    O valor padrão é verdadeiro, mas o uso do padrão foi descontinuado, pois o padrão mudará no futuro. Pesquise essa configuração e escolha o que é apropriado para seu caso de uso.
    
    Observe que se você estiver usando Session em conjunto com PassportJS, o Passport adicionará um objeto Passport vazio à sessão para uso após a autenticação de um usuário, o que será tratado como uma modificação na sessão, fazendo com que ela seja salva. Isso foi corrigido no PassportJS 0.3.0.
    */

    //? genid: function(req) { return genuuid() },
    /* Função a ser chamada para gerar um novo ID de sessão. Forneça uma função que retorne uma string que será usada como ID de sessão. A função recebe req como primeiro argumento se você quiser usar algum valor anexado a req ao gerar o ID.

    O valor padrão é uma função que usa a biblioteca segura para uid para gerar IDs.

    NOTA tenha cuidado ao gerar IDs exclusivos para que suas sessões não entrem em conflito.
    */

    //? name: 'connect.sid',
    /* O nome do cookie de ID de sessão a ser definido na resposta (e lido na solicitação).

    O valor padrão é 'connect.sid'.

    Observe que se você tiver vários aplicativos em execução no mesmo nome de host (este é apenas o nome, ou seja, localhost ou 127.0.0.1; esquemas e portas diferentes não nomeiam um nome de host diferente), será necessário separar os cookies de sessão uns dos outros. O método mais simples é simplesmente definir nomes diferentes por aplicativo.
    */

    //? proxy: undefined,
    /* Confia no proxy reverso ao definir cookies seguros (por meio do header “X-Forwarded-Proto”).

    O valor padrão é undefined.

    - true: O cabeçalho “X-Forwarded-Proto” será usado.
    - false: Todos os cabeçalhos são ignorados e a conexão é considerada segura somente se houver uma conexão TLS/SSL direta.
    - undefined: Usa a configuração “trust proxy” do express.
    */

    //? rolling: false,
    /* Força a definição do cookie identificador de sessão em cada resposta. A expiração é redefinida para o maxAge original, reiniciando a contagem regressiva da expiração.

    O valor padrão é falso.

    Com isso habilitado, o cookie identificador de sessão irá expirar em maxAge desde que a última resposta foi enviada, em vez de em maxAge desde que a sessão foi modificada pela última vez pelo servidor.

    Isso normalmente é usado em conjunto com valores maxAge curtos e sem duração de sessão para fornecer um tempo limite rápido dos dados da sessão com potencial reduzido de ocorrência durante interações contínuas do servidor.

    Nota: Quando esta opção estiver definida como verdadeira, mas a opção saveUninitialized estiver definida como falsa, o cookie não será definido em uma resposta com uma sessão não inicializada. Esta opção modifica apenas o comportamento quando uma sessão existente foi carregada para a solicitação.
    */

    //? unset: 'keep',
    /* Controle o resultado da desativação de req.session (por meio de exclusão, configuração como nula, etc.).

    O valor padrão é 'keep'.

    - 'destroy': A sessão será destruída (excluída) quando a resposta terminar.
    - 'keep': A sessão na loja será mantida, mas as modificações feitas durante a requisição serão ignoradas e não salvas.
    */

    cookie: { // Object com as configurações para o cookie de ID da sessão. O valor padrão é { path: '/', httpOnly: true, secure: false, maxAge: null }.

        //? path: '/',
        // Especifica o valor do Path Set-Cookie. Por padrão, isso é definido como '/', que é o caminho raiz do domínio.

        httpOnly: true, // Especifica o valor booleano para o atributo HttpOnly Set-Cookie. Quando verdadeiro, o atributo HttpOnly é definido, caso contrário não é. Por padrão, o atributo HttpOnly está definido. Tenha cuidado ao definir isso como verdadeiro, pois os clientes compatíveis não permitirão que o JavaScript do lado do cliente veja o cookie em document.cookie.

        //? secure: false,
        // Especifica o valor booleano para o atributo Secure Set-Cookie. Quando verdadeiro, o atributo Secure é definido, caso contrário não é. Por padrão, o atributo Secure não está definido.

        // Tenha cuidado ao definir isso como verdadeiro, pois os clientes compatíveis não enviarão o cookie de volta ao servidor no futuro se o navegador não tiver uma conexão HTTPS.

        // Observe que secure: true é uma opção recomendada. No entanto, requer um site habilitado para https, ou seja, HTTPS é necessário para cookies seguros. Se a segurança estiver definida e você acessar seu site por HTTP, o cookie não será definido. Se você tem seu node.js atrás de um proxy e está usando secure: true, você precisa definir “trust proxy” no express.

        // A opção cookie.secure também pode ser definida com o valor especial 'auto' para que esta configuração corresponda automaticamente à segurança determinada da conexão. Tenha cuidado ao usar esta configuração se o site estiver disponível como HTTP e HTTPS, pois depois que o cookie for definido como HTTPS, ele não estará mais visível por HTTP. Isso é útil quando a configuração Express "trust proxy" está configurada corretamente para simplificar a configuração de desenvolvimento versus produção.

        // Para saber mais consulte a documentação do express-session.

        maxAge: 604800000, // 1000 * 60 * 60 * 24 * 7 (7 dias), Especifica o número (em milissegundos) que o cookie/session vai durar. Isso é feito pegando o horário atual do servidor e adicionando maxAge milissegundos ao valor para calcular uma data e hora de expiração. Por padrão, nenhuma idade máxima é definida.

        //? domain: 'yourdomain.com',
        // Especifica o valor do atributo Domain Set-Cookie. Por padrão, nenhum domínio é definido e a maioria dos clientes considerará que o cookie se aplica apenas ao domínio atual.

        //? expires: new Date(),
        // Especifica que o objeto Date será o valor do atributo Expires Set-Cookie. Por padrão, nenhuma expiração é definida e a maioria dos clientes considerará este um “cookie não persistente” e o excluirá em condições como sair de um aplicativo de navegador da web.

        // Nota Se expires e maxAge estiverem definidos nas opções, então o último definido no objeto é o que será usado.

        // Nota A opção expira não deve ser definida diretamente; em vez disso, use apenas a opção maxAge.

        //? sameSite: false,
        /* Especifica o booleano ou a sequência para ser o valor do atributo SameSite Set-Cookie. Por padrão, isso é falso.

        - true definirá o atributo SameSite como Estrito para aplicação estrita do mesmo site.
        - false não definirá o atributo SameSite.
        - 'lax' definirá o atributo SameSite como Lax para aplicação frouxa do mesmo site.
        - 'none' definirá o atributo SameSite como None para um cookie explícito entre sites.
        - 'strict' definirá o atributo SameSite como Strict para aplicação estrita do mesmo site.
        */

        // Mais informações sobre os diferentes níveis de aplicação podem ser encontradas em: https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7

        // Nota: Este é um atributo que ainda não foi totalmente padronizado e pode sofrer alterações no futuro. Isso também significa que muitos clientes podem ignorar esse atributo até que o entendam.

        // Nota: Há um rascunho de especificação que exige que o atributo Secure seja definido como true quando o atributo SameSite tiver sido definido como 'none'. Alguns navegadores da web ou outros clientes podem estar adotando esta especificação.
    }
});

app.use(sessionOptions); // usando express-session, veja o arquivo homePageController.js na pasta src/controllers para um exemplo de session

app.use(connectFlash()); // usando flash messages, veja o arquivo homePageController.js na pasta src/controllers para ver exemplos de flash messages

app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log(`Server started at: http://localhost:${port}`);
    });
});