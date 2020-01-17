const texto = `
Os e-mails dos convidados são:
    - fulnao@cod3r.com.br
    - xico@gmail.com
    - joao@gmail.com
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`
console.log(texto.match(/\S+@\w+\.\w{2,6}(\.w{2,})?/g))
