function ValidaCPF (cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });

}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo)
// cpf.valida();