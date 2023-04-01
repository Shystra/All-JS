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
}