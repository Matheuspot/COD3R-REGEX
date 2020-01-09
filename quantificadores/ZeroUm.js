const texto1 = 'De longe eu avistei o fogo e uma  pessoa gritando: FOGOOOOO!'
const texto2 = 'There is  big fog in NYC'

// ? (Representa zero ou um,  sendo opcional)
const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

 const regex2 = /fogo*/gi
 console.log(texto1.match(regex2))