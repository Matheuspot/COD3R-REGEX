const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/gi))

const texto2 = 'Lentamente é mente muito lenta.'
console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente).*/gi))
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))
// Neste caso o retrovisor é apenas (mente), dado que  "?:" não guarda valor
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))
console.log(texto2.match(/(lenta)?(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
// Substitui o que está na sequência de grupos pelo conteúdo que está no grupo 1
console.log(texto2.replace(/(lenta)(mente)/gi, '$1'))
// Substitui o que está na sequência de grupos pelo conteúdo que está no grupo 2
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))



