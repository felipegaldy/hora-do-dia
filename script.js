
function carregar() {


    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#foto1')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var dia = data.getDay()
    var diam = data.getDate()
    var mes = data.getMonth()

    switch(dia) {
        case 0: dia = 'Domingo'
        break
        case 1: dia = ('Segunda')
        break
        case 2: dia = ('Terça')
        break
        case 3: dia = ('Quarta')
        break
        case 4: dia = ('Quinta')
        break
        case 5: dia = ('Sexta')
        break
        case 6: dia =('Sabado')
        break
        default: dia = ('ERROR - Dia Inválido')
        }
    switch(mes) {
        case 0: mes = 'Janeiro'
        break
        case 1: mes = 'Fevereiro'
        break
        case 2: mes = 'Março'
        break
        case 3: mes = 'Abril'
        break
        case 4: mes = 'Maio'
        break
        case 5: mes = 'Junho'
        break
        case 6: mes = 'Julho'
        break
        case 7: mes = 'Agosto'
        break
        case 8: mes = 'Setembro'
        break
        case 9: mes = 'Outubro'
        break
        case 10: mes = 'Novembro'
        break
        case 11: mes = 'Dezembro'
        break

    }
    msg.innerHTML = `<h2>${hora} horas ${minutos} minutos e ${segundos} segundos</h2>`
    msg.innerHTML += `<strong>${dia}, ${diam} de ${mes}</strong> `

    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = "dia.jpg"
        msg.innerHTML += '<br><h3><strong>Bom dia !</br></strong>'
        window.document.body.style.background = '#F0DD9C'

        
    }else if (hora > 12 && hora <= 18) {
        //boa tarde!
        img.src = "tarde2.jpg"
        msg.innerHTML += '<br><strong><h3>Boa tarde !</h3></br></strong>'
        window.document.body.style.background = '#F9BD65'
        
        
    }else {
        //boa noite!
        img.src = "noite.jpg"
        msg.innerHTML += '<br><h3><strong>Boa noite! !</h3></br></strong>'
        window.document.body.style.background = '#10111E'
    }


}
