const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// regex à procura do número 9 
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
// Verifica se há o número 9 e retorna true ou false
console.log(regexNove.test(texto))
// Mediante a resposta true, é exibido o conteúdo e posição
console.log(regexNove.exec(texto))

// regex à procura das letras de a até f
const regexLetras = /[a-f]/g
console.log('Métodos da String... ')
// Apenas exibe os caracteres correspondentes ao regex
console.log(texto.match(regexLetras))
// Aponta o índice do primeiro regex correspondente
console.log(texto.search(regexLetras))
// Substituir os regexs correspondentes por uma string
console.log(texto.replace(regexLetras, 'Achei'))
// Gerar um array a partir da regex
console.log(texto.split(regexLetras))

// Extra classe
const meuNome = 'Matheus Antonio da Silva'
console.log(meuNome.split(" ").join("+"))
