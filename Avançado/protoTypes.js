function Pessoa ( nome, sobrenome ){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;

};

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa ('Lucas', 'O.'); // <= Pessoa = Função construtora
const pessoa2 = new Pessoa ('Souza', 'A.'); // <= Pessoa = Função construtora

const data = new Date(); // <= Date = Função construtora/

console.dir(pessoa1);