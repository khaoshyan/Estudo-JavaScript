
function checar(){

    var txtn1 = document.getElementById('txtn1')
    var txtres = document.getElementById('CssResul')

    var n1 = Number(txtn1.value)

    if(n1 <= 60){
        txtres.innerHTML = `Seu limite de velocidade de <strong> ${n1} Km/h </strong> está abaixo do permitido. Muito Bem!!`
    } else {
        txtres.innerHTML = `Seu limite de velocidade de <strong> ${n1} Km/h </strong> está acima do permitido. Tome cuidado!!`
    }

}