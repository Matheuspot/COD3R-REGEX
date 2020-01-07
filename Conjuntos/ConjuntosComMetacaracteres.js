const texto = '.$+*?-'
/* Dentro de um conjunto "[]" os metacaracteres são interpretados como texto/string,
não sendo necessário scape "\"  */ 
console.log(texto.match(/[+.?*$]/g))
// Neste caso o ponto é um metacaractere, usado como "coringa"
console.log(texto.match(/[+.?*$]./g))
// Exemplo do ponto funcionando  como literal
console.log(texto.match(/[.]/g))
// Exemplo com intervalo
console.log(texto.match(/[$-?]/g))
// Exemplo de não intervalo (range)
console.log(texto.match(/[$\-?]/g))