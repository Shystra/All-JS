const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza' },
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento' },
    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento' },
    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento' },
    { id: 6, nome: 'teste', valor: 10.00, categoria: 'alimento' },
];

// Reduce pega uma array e entrega um valor unico transformado

const numeros = [1, 2, 3, 4];
                            //acomulado sempre o resultado do valor anterior
const total = numeros.reduce((acomulado, numero ) => acomulado + numero);
console.log(total);

console.log()

const totalProdutos = produtos.reduce((acc, p) => acc + p.valor, 0);
console.log(totalProdutos)




