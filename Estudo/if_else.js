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

console.log ()






const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log ('O numero esta entre 0 e 5.')
} else {
    console.log ('O numero Nao esta entre 0 e 5')
}

console.log ()
console.log ()


// A partir do momento que o java achar uma das condições ele ira parar ali mesmo.
if (numero >= 0 && numero <= 5) {
    console.log ('O numero esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8){
    console.log ('O numero esta entre 6 e 8.');
} else if (numero >= 9 && numero <= 11){
    console.log ('O numero esta entre 9 e 11.');
}



