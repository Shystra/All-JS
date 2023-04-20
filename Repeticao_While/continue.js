const numeros = [1, 2, 3, 4, 5]

for (let numero of numeros) {
    if (numero === 2 || numero === 3){
        continue;
    }
    if (numero === 5){
        continue;
    }

    console.log(numero);
}