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
//const soma = array.reduce((acc, item) => {return acc}, 0)

const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

console.log(soma)

//PROMISES
//as promises são uma forma de tratar uma chamada a um banco de dados ou a uma API, por exemplo, que são ações que levam um tempo para serem resolvidas e podem ou não terem um retorno, e em caso de um não retorno (erro), as promises são capazes de tratá-lo

const somaDois = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a+b)
      reject(a-b)
    }, 2000)
  })
}

somaDois(1, 3)
.then(soma => {
  console.log(soma)
})
.catch(console.error())

//obeserve que tudo que aparece depos ocorrerá antes da função somaDois, pois ela é uma promise que sempre levará 2segundos

//FETCH
//usado para realizar aquisições http e possui caráter de uma promise

fetch('https://api.github.com/users/allanfpcruz')
  .then(response => {
    return response.json()
  })
  .then(resp => {
    console.log(resp)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log('terminou')
  })


//o finally serve para realizar alguma ação sempre no final da promise, independente se der certo ou não
//obs: funções json() e text() tambbém são promises e devem ser tratadas com .then

//ASYNC AWAIT

//async declara uma função como assíncrona, logo, todas as sua variáveis em bloco devem receber uma await
//para realizar o tratamento de erros e finally, usar try-catch-finally

async function buscaGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/allanfpcruz')
    const respoJson = await response.json()
    return respoJson.login
  } catch (erro) {
    console.log(erro)
  } finally {
    console.log('terminou async await')
  }
}

//como o que acontece abaixo, todo retorno de uma função async deve ser tratado como uma promise

buscaGitHub().then(login => {
  console.log(login)
})

//ES MODULES

//possibilidade de importar e exportar variáveis e funções de arquivos de diversas maneiras

import { sub as subtracao, subAlt } from './lib/sub.js'

console.log(subtracao(1, 2))

//named export => quando a exportação e importação acontece com os mesmos nomes nos dois arquivos (possível alterar como a palavra reservada as)

import * as math from './lib/math.js'
console.log(math.PI)
console.log(math.soma(1, 2))

//export default => quando uma arquivo exporta somente um elemento, é possível usar o export default e importar o elemento sem chaves e usando um outro nome (não recomendável)

//também é possível usar um arquivo separado para manejar as importações (como o que faz o arquivo travel.js) 

import { subtracoes } from './lib/travel.js'

console.log(subtracoes.subAlt(3, 4))

//essa ultima parte ficou meio bagunçada, espero que dê para entender