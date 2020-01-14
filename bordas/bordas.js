const texto = 'Romário era um excelente jogador\m, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
// ^ primeira posição do caractere (quando não um conjunto)
console.log(texto.match(/^/gi))
// $ final de linha/string
console.log(texto.match(/r$/gi))
// O ponto não identifica \n - Problema dotall
console.log(texto.match(/^r.*r$/gi))