/* . ? + - ^ $ | [ ] { } ( ) \ :
 Barra invertida "\" chama-se "escape" para sinalizaer uso como literal
ao invés de metacaractere*/

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))