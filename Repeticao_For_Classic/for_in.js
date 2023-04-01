const frutas = [
    'Pera', 'Maça', 'Uva'
];


//Clássico
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

// For com in lê os indices ou chaves dos objetos
for (let indice in frutas) {
    console.log (frutas[indice]);
};


const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Souza',
    idade: 22
};

// For in buscando em chaves;
for (let chaves in pessoa) {
    console.log (chaves, pessoa[chaves])
};