const texto1 = 'De longe eu avistei o fogo e uma  pessoa gritando: FOGOOOOO!'
const texto2 = 'There is  big fog in NYC'

// * (Representa zero ou mais) - Guloso
const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

// * (Representa zero ou mais) - Não guloso
const regex2 = /fogo*?/gi
console.log(texto1.match(regex2))
console.log(texto2.match(regex2))