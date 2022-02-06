var Data = new Date()
var hora = Data.getHours()

var horario = document.getElementById('horario')

horario.innerHTML = `Agora são ${hora} horas.`