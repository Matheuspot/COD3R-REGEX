const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// O ponto não identifica \n - Problema dotall
console.log(texto.match(/^r.*r$/gi))
// Forma de identificar o \n
console.log(texto.match(/^r[\s\S]*r$/gi))