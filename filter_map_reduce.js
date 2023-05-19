const numeros = [5, 10, 50, 80, 1, 6, 3, 100, 200];

const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0;
}).map( n => n * 2). reduce(function( acumulador, valor){
    return acumulador + valor
});
console.log( numerosPares )
