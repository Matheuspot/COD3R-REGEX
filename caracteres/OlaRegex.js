/*
console.log(regex.test(texto))
console.log(regex.exec(texto))
*/


const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR. '

const regex = /casa/g
console.log(texto.match(regex))
console.log(texto.match(/a b/))

// teste