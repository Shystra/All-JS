// bloco do for nao tem ; no final

// Dentro do parentes sera necessario
// 1° Criar uma variavel
// 2° Criar uma condição que vai parar esse laço
// 3° Inclementar ou decrementar uma variavel de controle


//    variavel/condicao/a cada volta no laço esse i vai ser iclementado de 1


for (let i = 400; i <= 500; i++) {
    console.log(`Linha ${i}`);
}

// Exemplo de for - Testando numero par ou impar


for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}

// Exemplo = Percorrendo Arrays

const frutas = ['Maçã', 'Pêra', 'Uva'];
console.log (frutas.length);  // Faka o numero de arrays

for (let i = 0; i < frutas.length; i++){
    console.log(`índice ${i}` ,frutas[i]);
}