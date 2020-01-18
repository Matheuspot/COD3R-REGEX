const aplicarCor = (text, reg, cor) => text.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]

// String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

// palavras reservadas

codigo = aplicarCor(codigo, /\b(public|class|static|if|else|package)\b/gi, 'd857cf')

// tipos...
codigo = aplicarCor(codigo, /\b(void|int)\b/gi, '1385e2')

// comentário de múltiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentário de uma linha 
codigo = aplicarCor(codigo, /(\/\/[\s\S]*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)