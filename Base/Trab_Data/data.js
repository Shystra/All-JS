/*
const teste = new Date();
console.log ('Dia', teste.getDate());
console.log ('Mês', teste.getMonth() + 1);
console.log ('Ano', teste.getFullYear());
console.log ('Hora', teste.getHours());
console.log ('Min', teste.getMinutes());
console.log ('Seg', teste.getSeconds());
console.log ('MiliSegundos', teste.getMilliseconds());
console.log ('Dia Semana', teste.getDay);

console.log (data.toString());
console.log()
*/


// Criando uma funcao para adicionar 0 se for menor que 10 
function zeroAEsquerda (test){
    return test >= 10 ? test : `0${test}`;
}



// Criando uma funcao data
function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+ 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/ ${hora}:${minutos}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil);