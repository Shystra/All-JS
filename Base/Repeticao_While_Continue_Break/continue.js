const numeros = [1, 2, 3, 4, 5, 6, 7]

for (let numero of numeros) {
    if (numero === 2 || numero === 3){
        console.log('Jump 2 and 3')
        continue;
    }
    if (numero === 5) {
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 geting out...')
        break;
    }
}