function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}


const pessoa1 = new Pessoa ( 'Lucas', 'Souza' );
const pessoa2 = new Pessoa ( 'Veronica', 'Rueli' );

console.log(pessoa1.nome)