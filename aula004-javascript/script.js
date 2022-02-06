
//declarações de variaveis
var area = window.document.getElementById('area')

//declarações de eventos
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', saiu)

//funções
function clicar(){    
    area.innerText = "Clicado"
    area.style.background = "red"
}

function entrar(){
    area.innerText = "Entrou"
}

function saiu(){
    area.innerText = "Clique aqui"
    area.style.background = "green"
}
