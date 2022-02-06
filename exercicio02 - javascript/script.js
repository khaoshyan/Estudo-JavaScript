var Data = new Date()
var hora = Data.getHours()

var horario = document.getElementById('horario')
var imagem = document.getElementsByClassName('StyleDiv')

imagem.setAttribute("style", "background-image: url(img/tarde.jpg)")

horario.innerHTML = `Agora são ${hora} horas.`

