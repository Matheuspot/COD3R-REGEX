const texto = '1,2,3,4,5,6,a.b c!d?e[f'
// para  definir uma classe (ou um conjunto) de caracteres use []

// Neste caso  os colchetes funcionam como lógica OU
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto'
const regexComESemAcento = /n[aã]./g
console.log(texto2.match(regexComESemAcento))

// Teste 1 
const regex1 = /o[ãt]/g
console.log(texto2.match(regex1))

// Teste 2
const regex2 = /.o[ãt]./g
console.log(texto2.match(regex2))
