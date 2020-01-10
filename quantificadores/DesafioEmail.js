const texto = `
Os e-mails dos convidados são:
 - fulano@cod3r.com.br
 - xico@gmail.com
 - joao@empresa.info.br
 - maria_silva@registro.br
 - rafa.sampaio@yahoo.com
 - rafa12-sampaio@yahoo.com
 - rafa@sampaio@yahoo.com
 - matheusantonio.info@gmail.com
 - matheusantonio.info@gmail.uk
` 
//console.log(texto.match(/\w+\@\w+\.\w+/gi))
console.log(texto.match(/\w+[\_\.\-]?\w+\@\w+\.\w{2,3}/gi))