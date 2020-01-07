const texto = 'ABC [abc] a-c 1234'

// Com conjunto é definido  um range entre a  e c, sendo a, b e c
console.log(texto.match(/[a-c]/g))

// Quando fora de um conjunto "[]" não é definido um range
console.log(texto.match(/a-c/g))
console.log(texto.match(/[A-z]/g))
// Este intervalo está fora de ordem da  tabela ASCII, dará erro
console.log(texto.match(/[a-Z]/g))
// Após colocar na ordem correta,  o regex foi validado
console.log(texto.match(/[Z-a]/g))

