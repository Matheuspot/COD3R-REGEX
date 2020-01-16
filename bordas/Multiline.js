const texto = ` 
Leo é muito legal
Emanuel foi jogar em Sergipe.
Bianca é casada com Habib.
`

console.log(texto.match(/\n/g))
// Começa e termina com a mesma letra
console.log(texto.match(/^(\w).+\1.?$/gi))
// Com a flag multiline, onde é pego todo conteúdo com múltiplas linhas
console.log(texto.match(/^(\w).+\1.?$/gim))

