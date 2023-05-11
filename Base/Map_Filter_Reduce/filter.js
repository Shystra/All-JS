const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza' },
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza' },
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento' },
    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento' },
    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento' },
    { id: 6, nome: 'teste', valor: 10.00, categoria: 'alimento' },
];

// filter deve respeitar a categoria escolhida => "somente"

const alimentos = produtos.filter(p => p.categoria === 'alimento');
console.log(alimentos);