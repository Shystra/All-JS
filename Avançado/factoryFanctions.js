function criaPessoa( nome, sobrenome, a, p) {
    return {
        nome, sobrenome,

        altura: a,
        peso: p, 


        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto (valor) {
            //tira o valor
            valor = valor.split(' ');
            //acrescenta o valor
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

            console.log(valor);
        },

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);            
        },
        
    };
}

const p1 = criaPessoa ('Lucas', 'Souza', 1.74, 65);
    const p2 = criaPessoa ('Souza', 'Pereira', 1.74, 65);
        const p3 = criaPessoa ('Veronica', 'Rueli', 1.66, 65);

console.log(p1.imc);
    console.log(p1.imc);
        console.log(p1.imc);