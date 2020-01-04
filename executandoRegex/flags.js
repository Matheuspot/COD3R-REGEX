/*
*Versao 1 - Flags
*g - global (reconhece todas os caracteres correspondentes ao regex)
*i - ignore case (ignora letras maiúsculas e minúsculas)
*Entre das duas barras "//" fica uma expressão regular 
*/


const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))