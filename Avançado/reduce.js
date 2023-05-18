const numeros = [5, 10, 50, 80, 1, 6, 3, 100, 200];

const total = numeros.reduce(function ( acumulador, valor, indice, array ){
    acumulador += valor;
    return acumulador;

});
console.log( total );

const numeroPar = numeros.reduce(function ( acumulador, valor ) {
    if( valor % 2 !== 0 ) acumulador.push(valor);
    return acumulador;
}, []);
console.log(numeroPar);
