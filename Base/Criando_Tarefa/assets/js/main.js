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

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar Tarefa');
    li.appendChild(botaoApagar);
}



function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

btnTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return; //TODO Verifica invertido -> se input nao tem valor retorna....
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(event) {
    const element = event.target;

    if (element.classList.contains('apagar')) {
        element.parentElement.remove();
        salvarTarefas();
    };
});



function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li')
    //console.log(liTarefas)
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //tira o apagar e os espaços
        listaDeTarefas.push(tarefaTexto);
    };

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    //console.log(tarefasJSON);
    localStorage.setItem('tarefas', tarefasJSON); //TODO Converte para JSON

};

function adicionarTarefasSalvas (){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //TODO Converte para JS

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    };
};
adicionarTarefasSalvas();