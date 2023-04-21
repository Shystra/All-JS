// Retorne o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Caso o numero nao seja divisivel retorna ele mesmo
// Checar se o numero realmente é um numero
// Usar a função com numeros de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return NaN; // Caso não seja numero ele nao retorna nada
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; // Essa função analisa 2 condições, por isso deve vir primeiro (sempre)
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}