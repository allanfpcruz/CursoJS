//NULLISH COALESCING OPERATOR

//0, '', [], {}, false, null, undefined => falsy(valores considerados falsos no operadodor ou '||')

let age = 0

console.log(`Sua idade é: ${age || 'Não informado'}`)

//nesse caso, a idade será apontada como não informado, mesmo o 0 sendo um valor a ser considerado

//o operador ?? considera como falsy somente aqueles que não possuem valor real "nuul ou undefined"

console.log(`Sua idade é ${age ?? 'Não informado'}`)

//OBJETOS

const user = {
  name: 'Allan',
  age: '16',
  adress: {
    street: 'Rua da Alrora',
    number: '123',
  },
}

//IN: verifica se há tal atributo no objeto, retorna true ou false 

console.log('name' in user)
//true
console.log('nickname' in user)
//false

//Object.keys() => retornar todos os nomes dos atributos diretos do objeto
console.log(Object.keys(user))

//Object.value() => retorna todos os valores do objeto (caso haja um objeto aninhado, como o adress, nesse caso, usas o JSON.stringfy() para facilitar)
console.log(JSON.stringify(Object.values(user)))

//Object.entries() => retorna os atributos e valores em forma de vetores
console.log(Object.entries(user))

//DESESTRUTURAÇÃO
//consiste em tirar parte de um obejto, é possivel, inclusive, renomear atributos e setar valores defaut para eles
//pode ser usada em todo lugar onde há referência a um objeto

const { adress, age: idade, nickname = 'Felipe' } = user

console.log(JSON.stringify({ adress, idade, nickname }))

//tambem pode ser usado em funções
function cumprimentar({ name }) {
  console.log('Olá, meu nome é ' + name)
}

cumprimentar(user)

//REST OPERATOR
//retorna o resto do obejto
const { name, ...rest } = user

console.log(JSON.stringify({ name, rest }))

//também pode ser usado com arrays
const array = [1, 2, 3, 4, 5]
const [first, , third, ...restante] = array
console.log(first, third, restante)

//SHORT SYNTAX
//acontece quando o nome da variável é o mesmo nome do atributo

let rodas = 4
let portas = 2

const veiculo = {
  rodas,
  portas
}

console.log(JSON.stringify(veiculo))