                                            //* FUNCTIONS

// Uma função JavaScript é um bloco de código projetado para executar um tarefa específica.

/* O código dentro da função será executado quando "algo" invocar (chamar) a função:

- Quando ocorre um evento (quando um usuário clica em um botão)
- Quando ele é invocado (chamado) a partir do código JavaScript
- Automaticamente (auto-invocado)
*/

// As regras de criação para o nome das funções são as mesmas das variáveis

// As variáveis dentro da function são locais, ou seja, não é possível acessa-las fora da function

// Você pode criar parâmetros para a function dentro dos parênteses () e enviar valores para esses param.

// Os valores são enviados dentro dos parênteses do invocador da function (quem chama)

//# function nomeDaFunction(param1, param2...) {}
//# nomeDaFunction(value: any) // Invocador da Function

function saudacao(nome) {
    console.log(`Boa Noite ${nome}!`)
}

saudacao('PunPun') // Invocador da Function