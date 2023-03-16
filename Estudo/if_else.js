// if, else if eeeee else
// else sozinho é usado apenas uma vez - ele só é executado caso nenhuma seja verdadeira
// else if usado varias vezes

const hora = 50;

if (hora >= 0 && hora <= 11){
    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23.59){
    console.log('Boa noite');
} else {
    console.log ('Numero incorreto');
}



