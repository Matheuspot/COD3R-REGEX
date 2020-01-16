const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+\b/gi))
console.log(texto1.match(/\w+dia\b/gi))
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi))

// borda é não \w, que é [^A=Za-z0-9] ... temos problemas com acentos!
const texto2 = 'dia diatônico diafragma, média wikioédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a vírgula entra!
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)\S?/gi)) // a vírgula entra!