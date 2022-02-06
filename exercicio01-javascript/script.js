function soma(){

//variaveis dos calculos
var var1 = window.document.getElementById('value1')
var var2 = window.document.getElementById('value2')
var resultado = window.document.getElementById('resultado')

//conversão dos numeros
v1 = Number(var1.value)
v2 = Number(var2.value)

var res = v1 + v2

resultado.innerHTML = `${res}`
window.alert(`O resultado da soma é ${res}`)

}

function subtrair(){

    //variaveis dos calculos
    var var1 = window.document.getElementById('value1')
    var var2 = window.document.getElementById('value2')
    var resultado = window.document.getElementById('resultado')
    
    //conversão dos numeros
    v1 = Number(var1.value)
    v2 = Number(var2.value)
    
    var res = v1 - v2
    
    resultado.innerHTML = `${res}`
    window.alert(`O resultado da soma é ${res}`)
    
    }