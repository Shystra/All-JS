function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // Dessa forma ele nao considera a hora inteira
    })
}

const relogio = document.querySelector('.relogio');
let segundos = 0; // Variavel que mantem os segundos
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);  // Resumindo essa function -> Ela basicamente adiciona +1seg a variavel "segundos"
};

document.addEventListener('click', function(evento) {
    const elemento = evento.target;

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    };

    if(elemento.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        relogio.classList.add('pausado');
    };

    if(elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    };

});









//iniciar.addEventListener('click', function(event) {
//    relogio.classList.remove('pausado')
//    clearInterval(timer)
//    iniciaRelogio();
//});

//pausar.addEventListener('click', function(event) {
//    clearInterval(timer);
//    relogio.classList.add('pausado');
//});

//zerar.addEventListener('click', function(event) {
//    clearInterval(timer);
//    relogio.innerHTML = '00:00:00';
//    segundos = 0;
//})