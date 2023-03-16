function meuEscopo () { // function usada para integração escopos separando do global
    const form = document.querySelector('.form'); // Seleciona classes/ tags
    const resultado = document.querySelector ('.resultado');
    
    const pessoas = []; //pessoas que vao preencher

    //let contador = 1
    function recebeEventoForm (evento) {
        evento.preventDefault(); // Tira o evento de envio;

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.nodeValue,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        `${peso.value} ${altura.value}</p>`;
    
    
    //    evento.preventDefault();
    //    console.log (`Form não foi enviado ${contador}`);
    //    contador++;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
