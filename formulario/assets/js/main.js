// Capturar evento de submit do formulario

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Se o peso for diferente (valor inválido)
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }


    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);

    console.log(imc, nivelImc);
});

/*
Menos de 18,5 - Abaixo do Peso
Entre 18.5 e 24,9 - Peso Normal
Entre 25 e 29,9 - Sobrepeso
Entre 30 e 34,9 - Obesidade grau 1
Entre 35 e 39,9 - Obesidade grau 2
Mais que 40 - Obesidade grau 3
*/
function getNivelImc (imc) {
    const nivel = [
        'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'
    ];

    if (imc >= 39.9) {
        return nivel[5];
    } 
    
    if (imc >= 34.9) {
        return nivel[4];
    } 
    
    if (imc >= 29.9) {
        return nivel[3];
    } 
    
    if (imc >= 24.9) {
        return nivel[2];
    } 
    
    if (imc >= 18.5) {
        return nivel[1];
    } 
    
    if (imc < 18.5) {
        return nivel[0];
    }
}





//TODO Criando a função IMC
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed (2);
}




function criaP (className) {
    const p = document.createElement('p');
    return p
}

    //TODO se o peso invalido ele vai parar aqui


function setResultado(msg, isValid) {
    //TODO O que mandar no setResultado ele vai colocar no html div RESULTADO
    const resultado = document.querySelector ('#resultado');
    //TODO Toda vez que chamar o resultado ele vai zerar
    resultado.innerHTML = '';
    const p = criaP();
    
    
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    
    p.innerHTML = msg;
    resultado.appendChild(p);
   
}