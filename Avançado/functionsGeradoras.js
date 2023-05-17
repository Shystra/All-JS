
function* geradora() {
    yield 'Valor 1';
    yield 'Valor 2';
}

const emite = geradora();
for(let valor of emite) {
    console.log(valor)
}