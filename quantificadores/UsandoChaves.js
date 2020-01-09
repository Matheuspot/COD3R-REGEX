const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'
// para definir um quantificador use  {}

console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/\d{1,3}/g))
console.log(texto.match(/\d{1,}/g))
console.log(texto.match(/[0-9]{2}/g))

// Obs: "Milhões não dá match por conta de  "õ" não estar no range de \w
console.log(texto.match(/\w{7}/g))
console.log(texto.match(/[\wõ\s]{7,}/g))

// no futuro...
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))



