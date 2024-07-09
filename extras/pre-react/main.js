//NULLISH COALESCING OPERATOR

//0, '', [], {}, false, null, undefined => falsy(valores considerados falsos no operadodor ou '||')

//let age = 0

//console.log(`Sua idade é: ${age || 'Não informado'}`)

//nesse caso, a idade será apontada como não informado, mesmo o 0 sendo um valor a ser considerado

//o operador ?? considera como falsy somente aqueles que não possuem valor real "nuul ou undefined"

//console.log(`Sua idade é ${age ?? 'Não informado'}`)

//OBJETOS

//const user = {
  //name: 'Allan',
  //age: '16',
  //adress: {
    //street: 'Rua da Alrora',
    //number: '123',
    //showFullAdress() {
      //return `${this.street}, ${this.number}`
    //}
  //},
//}

//IN: verifica se há tal atributo no objeto, retorna true ou false 

//console.log('name' in user)
//true
//console.log('nickname' in user)
//false

//Object.keys() => retornar todos os nomes dos atributos diretos do objeto
//console.log(Object.keys(user))

//Object.value() => retorna todos os valores do objeto (caso haja um objeto aninhado, como o adress, nesse caso, usas o JSON.stringfy() para facilitar)
//console.log(JSON.stringify(Object.values(user)))

//Object.entries() => retorna os atributos e valores em forma de vetores
//console.log(Object.entries(user))

//DESESTRUTURAÇÃO
//consiste em tirar parte de um obejto, é possivel, inclusive, renomear atributos e setar valores defaut para eles
//pode ser usada em todo lugar onde há referência a um objeto

//const { adress, age: idade, nickname = 'Felipe' } = user

//console.log(JSON.stringify({ adress, idade, nickname }))

//tambem pode ser usado em funções
//function cumprimentar({ name }) {
//  console.log('Olá, meu nome é ' + name)
//}

//cumprimentar(user)

//REST OPERATOR
//retorna o resto do obejto
//const { name, ...rest } = user

//console.log(JSON.stringify({ name, rest }))

//também pode ser usado com arrays
const array = [1, 2, 3, 4, 5]
//const [first, , third, ...restante] = array
//console.log(first, third, restante)

//SHORT SYNTAX
//acontece quando o nome da variável é o mesmo nome do atributo

//let rodas = 4
//let portas = 2

//const veiculo = {
  //rodas,
  //portas
//}

//console.log(JSON.stringify(veiculo))

//OPTIONAL CHAINING
//é utilizado para tratar erros caso alguma propriedade ou método não existam

//tradicionalmente, usaria-se um operador ternário, mas não é possível verificar a existência de um método

//console.log(user.adress 
//  ? user.adress.showFullAdress() 
//  : 'Não informado')

//mas com o optional chaining as coisas ficam mais fáceis

//console.log(user.adress?.showFullAdress?.() ?? 'Não informado')

//MÉTODOS DE ARRAY => map, filter, every, some, find, findIndex, reduce

//MAP => pode ter retorno, sempre com o mesmo tamanho (length) do array original, mas tem a mesma funcionalidade do for each, mas este não pode ter um retorno

//const forEachExample = []

//array.forEach(item => {
//  forEachExample.push(item * 2)
//})

//console.log(forEachExample)

const novoArray = array.map(item => item * 2) //sintaxe simples

console.log(novoArray)

//FILTER => tira parte de um array, seleciona alguns itens de acordo com uma condição e os retorna
const arrayImparMultiplicado = array.filter(item => item % 2 != 0).map(item => item * 10)

console.log(arrayImparMultiplicado)

//EVERY => retorna um booleano se TODOS os valores do array satisfazem uma condição

//SOME => retorna um booleano se PELO MENOS UM valor do array satifaça uma condição

const saoTodosNum = array.every(item => typeof item === 'number')
console.log(saoTodosNum)

const algunNaoENum = array.some(item => typeof item != 'number')
console.log(algunNaoENum)

//FIND => retorna o primeiro valor que satisfaça uma condição
//FINDINDEX => retorna o índice do primeiro valor que satisfaça uma condição

const primeiroPar = array.find(item => item % 2 == 0)
console.log(primeiroPar)

const indexPrimeiroPar = array.findIndex(item => item % 2 == 0)
console.log(indexPrimeiroPar)

//REDUCE => permite formar uma nova estrutura de dados, totalmente livre, a partir de um array recebido, tendo como parâmetros, uma arrow function, esta tem como parâmetro um acumulador (acc), que recebe o valor a cada interação, e o item, assim como os outros métodos, que recebe o valor de cada item do array, além disso, no outro parâmetro do reduce é preciso definir um valor inicial para a variável que será criada, um número seria 0, uma string seria '', um outro array seria [], um obj seria {}, também é esperado que o acc seja retornado a cada interação do método.

//ESTRUTURA BÁSICA
//const soma = array.reduce((acc, item) => {}, 0)

const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

console.log(soma)