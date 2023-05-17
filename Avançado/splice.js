const nomes = [ 'Maria', 'Lucas', 'Veronica', 'Shystra'];

// nomes.splice( indice, delete, elem1, elem2, elem3);
// pop - delet;

const removeNome = nomes.splice(3, 1)
console.log( nomes, removeNome );


const removeUltimoElemento = nomes.splice(-1, 1);
console.log( nomes, removeUltimoElemento );


const substituiNome = nomes.splice(1, 2, 'Ana', 'Bia');
console.log( nomes, substituiNome );


// push tbm adiciona
const adicionaNome = nomes.splice(3, 0, 'Lucas','Souza', 'Andreia');
console.log( nomes, adicionaNome );