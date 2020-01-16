const texto = 'Romário era um excelente jogador, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
// o "^" fora de um conjunto quer dizer o início da linha/string
console.log(texto.match(/^r/gi))
// $ seleciona o fim da linha/string
console.log(texto.match(/r$/gi))
// problema de dotall - o ponto não reconhece \n
console.log(texto.match(/^r.+r$/gi))
