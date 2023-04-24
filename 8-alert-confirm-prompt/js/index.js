// alert, confirm e prompt são caixas de diálogo, ou seja, janelas modais que são exibidas no navegador com o objetivo de interagir com a pessoa usuária da página. Também são métodos que estão dentro do objeto "window" que por sua vez está dentro do BOM.

/* "window" é um objeto do BOM "Browser Object Model" (Modelo de Objeto do Navegador) que permite controlar toda a página e permite acessar os objetos filhos, além de propriedades e métodos associados a eles. É basicamente a mãe / pai de todos os elementos.

 * Os objetos relacionados ao BOM estão associados a recursos para a manipulação do navegador, como os objetos screen, location, history e outros, que são controlados pelo objeto window.
*/

//alert('Bom dia!') // retorna undefined

//confirm('Quer continuar?') // retorna true ou false

//prompt('Qual o seu nome?') // retorna o valor que o usuário digitou

// você pode guardar os valores retornados em uma variável:

const confirmar = confirm('deseja continuar?')

const num1 = prompt('digite um número!')

const num2 = prompt('digite outro número!')

const resultado = num1 + num2

alert(resultado) // o valor retornado vai ser a concatenção do num1 e do num2 pois todo valor digitado no prompt() é retornado como String. Então se você quiser fazer alguma operação com números, primeiro você tem que converter os valores de String para Number.