//TODO function -> argumentos que sustentam todos os argumentos enviados

function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);

};
soma(1,2,3,4,5)