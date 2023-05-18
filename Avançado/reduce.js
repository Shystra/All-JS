const numeros = [5, 10, 50, 80, 1, 6, 3, 100, 200];



const pessoas = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Souza', idade: 22 },
    { nome: 'Veronica', idade: 22 },
    { nome: 'Rueli', idade: 60 },
    { nome: 'Maria', idade: 30 },
];
idade = 40


const total = numeros.reduce(function ( acumulador, valor, indice, array ){
    acumulador += valor;
    return acumulador;

});
console.log( total );

const numeroPar = numeros.reduce(function ( acumulador, valor ) {
    if ( valor % 2 == 0 )
    { acumulador += valor };
    return acumulador;

}, 0);
console.log(numeroPar);


const pessoaMaisVelha = pessoas.reduce(function ( acumulador, valor ) {
    if ( acumulador.idade > valor.idade ) return acumulador;
    return valor;
});
console.log(pessoaMaisVelha)





