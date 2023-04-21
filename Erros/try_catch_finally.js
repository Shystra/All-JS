try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
} finally {
    // Sempre vai ser Executado
}

function retornHour(data) { //TODO  ! se a data NÃO for a instancia de data
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) { //TODO ! se a data NÃO for a instancia de data
        data = new Date ();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });

}

// Tratando o erro caso o usuario coloque a data incorreta 
try {
    const data = new Date('01-01-1970 12:58:12'); //Exemplo de data
    const hora = retornHour();
    console.log(hora);
} catch(e){
    //
} finally {
    console.log('Tenha um bom dia!')
}
