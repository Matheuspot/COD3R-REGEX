// Forma reduzida de um grupo de caracteres

const texto = `1,2,3,4,5,6, a.b c!d?e\r	-
f_g`

// Selecionados todos os dígitos do texto, eq. [0-9]
console.log(texto.match(/\d/))

// São selecionados os não números, eq.  [^0-9]
console.log(texto.match(/\D/g))

// Equivale  a [a-zA-Z0-9_]
console.log(texto.match(/\w/g))

// Equivale  a [^a-zA-Z0-9_]	
console.log(texto.match(/\W/g))

//  Espaço [ \t\n\r\f]
console.log(texto.match(/\s/g) )

//  Espaço [^ \t\n\r\f]
console.log(texto.match(/\S/g))

