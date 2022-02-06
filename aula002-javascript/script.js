var nome = window.prompt("Qual é o seu nome?")
var var1 = Number(window.prompt("Numero da variavel?"))
var var2 = Number(window.prompt("Numero da segunda variavel?"))
var var3 = 0

document.write(`Olá <strong> ${nome} </strong>. Seu nome tem ${nome.length} Letras.<br>`)
document.write(`Seu nome em maiúcula será ${nome.toUpperCase()}.<br>`)
document.write(`Seu nome em minúculas será ${nome.toLowerCase()} <br>`)
document.write(`O valor das variaveis são ${var1} e sua complementar ${var2} <br>`)

var3 = var1 + var2

document.write(`Os valores da soma são ${var3} `)
