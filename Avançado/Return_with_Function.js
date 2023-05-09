// return 
// Retorna um valor
// Termina a função

function soma (a, b){
    return a + b;
}
console.log(soma(2, 5))

//_________________________________________//


function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}

const p1 = criaPessoa('Lucas', 'Souza');
console.log(p1)
//_________________________________________//



function criaMultiplicador (multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
console.log(duplica(2))
console.log(triplica(3))