let nome = window.prompt("Qual é o seu nome?")

document.write(`Olá <strong> ${nome} </strong>. Seu nome tem ${nome.length} Letras.<br>`)
document.write(`Seu nome em maiúcula será ${nome.toUpperCase()}.<br>`)
document.write(`Seu nome em minúculas será ${nome.toLowerCase()}`)
