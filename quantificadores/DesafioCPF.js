const texto_cpf = '321.221.212-31'
// Minhas soluções
console.log(texto_cpf.match(/(\d{3}\.){2}\d{3}\-\d{2}/g))
console.log(texto_cpf.match(/([0-9]{3}\.){2}[0-9]{3}\-[0-9]{2}/g))
// Solução do instrutor
console.log(texto_cpf.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g))

