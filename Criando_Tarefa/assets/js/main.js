const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas'); 

function criaLi () {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) { //13 é o numero da tecla enter
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }   
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();

}

btnTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return; //TODO Verifica invertido -> se input nao tem valor retorna....
    criaTarefa(inputTarefa.value);
});