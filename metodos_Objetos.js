const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = {...produto};

outraCoisa.nome = 'Outro nome';

console.log( produto )
console.log( outraCoisa )