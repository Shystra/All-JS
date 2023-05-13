const nome = 'Lucas';
const sobrenome = 'Souza';
const idade = 22;
const peso = 65;'kg';
const alturaEmCm = 1.74; 


let imc; //peso / (altura * altura)
let anoNascimento;

const result = peso / (alturaEmCm * alturaEmCm);
// Later
anoNascimento = 2023 - idade;


console.log (nome + ' ' + sobrenome + ' tem ' + idade + ' anos ', ' pesa ' + peso + 'kg');
console.log ('tem', alturaEmCm, 'de altura e seu IMC é de', result);
console.log (nome, 'nasceu em', anoNascimento,'.');

