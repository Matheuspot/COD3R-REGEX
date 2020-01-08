const texto = '1,2,3,a.b c!d7e[f'

// Não números - [^0-9]
console.log(texto.match(/\D/g))

// Tudo que não for de 0 a 9 não será  selecionado
console.log(texto.match(/[^0-9]/g))

// Apenas letras
console.log(texto.match(/[^\d!\?\[\s,\.]/g))
console.log(texto.match(/[^\d]/g))

const texto2 = '1:  !"#$%&\ `()*+,-./  2: :/<=>?@'
console.log(texto2.match(/[^!-/:-@\s]/g))