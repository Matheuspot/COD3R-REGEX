<<<<<<< HEAD
const texto = 'Romário era um excelente jogador, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
// o "^" fora de um conjunto quer dizer o início da linha/string
console.log(texto.match(/^r/gi))
// $ seleciona o fim da linha/string
console.log(texto.match(/r$/gi))
// problema de dotall - o ponto não reconhece \n
console.log(texto.match(/^r.+r$/gi))
=======
const texto = 'Romário era um excelente jogador\m, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
// ^ primeira posição do caractere (quando não um conjunto)
console.log(texto.match(/^/gi))
// $ final de linha/string
console.log(texto.match(/r$/gi))
// O ponto não identifica \n - Problema dotall
console.log(texto.match(/^r.*r$/gi))
>>>>>>> 1cd8905aa48536d52ed6bc9a92cf92d45fd922fd
