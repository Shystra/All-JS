function Conta ( agencia, conta, saldo ){
    this.agencia = agencia;
        this.conta = conta;
    this.saldo = saldo;
    
};

Conta.prototype.sacar = function( valor ){
    if( valor > this.saldo ) {
        console.log(`Saldo insuficiente: R$${this.saldo},00`)
        return;
    };
    this.saldo -= valor;
    this.verSaldo()

};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)}`)
};


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo, limite);
    this.limite = limite;


};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: R$${this.saldo},00!`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const testeConta = new ContaCorrente(11, 22, 0, 100);
testeConta.depositar(10);
testeConta.sacar(90);
testeConta.sacar(90);









// const conta1 = new Conta(11, 22, 10);
// // console.log(conta1)
// conta1.depositar(11);
// conta1.depositar(200);
// conta1.sacar(100);
// conta1.sacar(200);