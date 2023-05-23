function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};



function Caneca( nome, preco, material, estoque ){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false, 

        get: function (){
            return estoque;

        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        },
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function ( percentual ){
    this.preco = this.preco + (this.preco * (percentual / 100));
};
Camiseta.prototype.desconto = function ( percentual_desconto ){
    this.preco = this.preco - (this.preco * ( percentual_desconto / 100 ));
};

const caneca = new Caneca('Caneca', 13, 'Plastico', 5);
const produto = new Produto ('Calça', 100, 'azul');
const camiseta = new Camiseta ('Regata', 7.5, 'Preta');

console.log(caneca);
console.log(produto);
console.log(camiseta);