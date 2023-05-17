const numeros = [5, 10, 50, 80, 1, 6, 3, 100, 200];

const maiorQue = numeros.filter(n => n >= 10);
console.log(maiorQue);

const menorQue = numeros.filter(n => n <= 10);
console.log(menorQue);

///////////////////////////////////////////////////

const pessoas = [
    { nome: 'Lucas', idade: 23 },
    { nome: 'Souza', idade: 22 },
    { nome: 'Veronica', idade: 22 },
    { nome: 'Rueli', idade: 60 },
];

const nomeGrande = pessoas.filter (n => n.nome.length >= 5);
console.log( nomeGrande );


const idadeAlta = pessoas.filter (i => i.idade >= 50);
console.log( idadeAlta );

const terminaComA =  pessoas.filter (i => i.nome.toLowerCase().endsWith('a'));
console.log( terminaComA )










