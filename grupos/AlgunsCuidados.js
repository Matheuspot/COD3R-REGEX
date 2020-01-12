const texto = 'Pedrinho (filho do Pedro Silvaaa) é doutor do ABC!'
// Dentro de um conjunto o grupo NÃO FUNCIONA
console.log(texto.match(/[(abc)]/gi))
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/(abc)/gi))
