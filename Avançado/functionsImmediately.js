(function() {

    const sobrenome = 'Souza';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    };

    function falaNome(){
        console.log(criaNome('Joao'));
    }
    
    falaNome();
})(); // <---- precisa fechar e invocar a function