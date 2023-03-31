// Capturar evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Se o peso for diferente
    if (!peso) {
        setResultado('Peso Inválido');
        return
    }

    console.log(peso, altura);
});



    //TODO se o peso invalido ele vai parar aqui


function setResultado(msg, isValid) {
    //TODO O que mandar no setResultado ele vai colocar no html div RESULTADO
    const resultado = document.querySelector ('#resultado');
    //TODO Toda vez que chamar o resultado ele vai zerar
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
   
}