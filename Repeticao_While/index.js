let i = 0

while (i <= 3) {
    console.log(i);
    i++;
}

// Criando numeros aleatorios

function random(min, max) {
    const numero = Math.random() * (max - min) + min;
    return numero;
}

let rand = random(1, 50);
console.log(rand);