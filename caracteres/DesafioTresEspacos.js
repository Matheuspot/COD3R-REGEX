const texto = 'a   b'
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))


// O sinal de '+' quer dizer 'Um espaço ou mais espaços em branco' neste caso
console.log(texto.match(/a\s+b/))
// O '{3}' quer dizer que há 3 espaços
console.log(texto.match(/a {3}b/))
// O '{3}' quer dizer que há 3 espaços indicados por \s
console.log(texto.match(/a\s{3}b/))
