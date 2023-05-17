const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const concatenaNumeros = num1.concat(num2);
console.log( concatenaNumeros );

const concatenaAdicionaValores = concatenaNumeros.concat([ 7, 8, 9 ], 'Lucas');
console.log( concatenaAdicionaValores );

console.log();

const espalhaNumeros = [...num1, ...num2, ...[ 10, 20, 30 ], 'Souza'];
console.log( espalhaNumeros );
