const texto1 = 'De longe eu avistei o fogo e uma  pessoa gritando: FOGOOOOO!'
const texto2 = 'There is  big fog in NYC'

// + (Representa um ou mais)
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os  números: 0123456789'
console.log(texto3.match(/[0-9]/g))
// Seleciona um ou mais números de 0 a 9
console.log(texto3.match(/[0-9]+/g))
// Versão "não gulosa" dos quantificadores adicionando "?"
console.log(texto3.match(/[0-9]+?/g))
// Versão usando shorthand
console.log(texto3.match(/\d/g))
console.log(texto3.match(/\d+?/g))
console.log(texto3.match(/\D+/g))
