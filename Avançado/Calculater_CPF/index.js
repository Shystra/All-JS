function ValidaCPF (cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
};

ValidaCPF.prototype.valida = function () {
    
    if( typeof this.cpfLimpo === 'undefined' ) return false;
    if( this.cpfLimpo.length !== 11 ) return false;
    if( this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito( cpfParcial );
    // console.log(digito1);
    const digito2 = this.criaDigito( cpfParcial + digito1)
    
    
    const novoCpf = cpfParcial + digito1 + digito2
    console.log(novoCpf)

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(  cpfParcial );
    

    let regressivo = cpfArray.length + 1;
    // console.log(regressivo);
    let total = cpfArray.reduce(( acumulador, valorAtual ) => {
        // console.log( regressivo, valorAtual, regressivo * valorAtual );
        acumulador += ( regressivo * Number(valorAtual) )
        regressivo--;
        return acumulador;
    }, 0) 
    // console.log(total)
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
};


ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
     return sequencia === this.cpfLimpo;
}


const cpf = new ValidaCPF('777.777.777-77');
// console.log(cpf.cpfLimpo)
// console.log(cpf.valida());

if( cpf.valida()){
    console.log ('CPF Valido!');
} else {
    console.log('CPF Inválido!')
}

