const texto1 = '(11) 98756-1212'
const texto2 = '98765-4321'

console.log(texto1.match((/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g)))
console.log(texto2.match((/\d{5}\-\d{4}/g)))