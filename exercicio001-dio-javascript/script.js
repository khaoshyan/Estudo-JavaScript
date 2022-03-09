var calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

var soma = function(num1, num2){
    return num1 + num2;
}

var mult = function(num1, num2){
    return num1 * num2;
}

num1 = 2
num2 = 4

var resultSoma = calc(soma, num1, num2);

var resultMult = calc(mult, num1, num2);

console.log(resultSoma);

console.log(resultMult);



console.log(num1)
console.log(num2)
