//TODO function -> argumentos que sustentam todos os argumentos enviados

function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);

};
soma(1,2,3,4,5)


console.log()
//Destruction

function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
}

conta('+', 0, 20, 30, 40)
console.log()

function contaExemploTwo(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
            if (operador === '-') acumulador -+ numero;
                if (operador === '/') acumulador /= numero;
                    if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
contaExemploTwo('+', 10, 20)