const numeros = [5, 10, 50, 80, 1, 6, 3, 100, 200];

const pessoas = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Souza', idade: 22 },
    { nome: 'Veronica', idade: 22 },
    { nome: 'Rueli', idade: 60 },
];


// const multiplicaNum = numeros.map (n => n * 2);
// console.log (numeros, multiplicaNum );

// const apenasNome = pessoas.map ( n => n.nome );
// console.log ( apenasNome );

// const deletaChave = pessoas.map ( i => ({ idade: i.idade }) );
// console.log( deletaChave );

const adicionaID = pessoas.map (function(obj, indice) {
    obj.id = indice;
    return obj;
})
console.log( adicionaID )
