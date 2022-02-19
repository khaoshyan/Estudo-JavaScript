const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2){
    return num1 + num2;
}

const mult = function(num1, num2){
    return num1 * num2;
}

const resultSoma = calc(soma, 2, 4);

const resultMult = calc(mult, 2, 4);

console.log(resultSoma);

console.log(resultMult);


