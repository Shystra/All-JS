let num1 = 9.54578;

let num2 = Math.floor (num1); // Usado para arredondar (floor arredonda para baixo);
let num3 = Math.ceil (num1); // Usado para arredondar (ceil arredonda para cima);
console.log(num2);
console.log(num3);

let num4 = Math.round (num1); // Usado para arredondar (round arredonda para o numero mais proximo);
console.log(num4)

console.log (Math.max (1,2,3,10,1500)); // Usado para pegar o maior numero da lista
console.log (Math.min (1,2,3,10,1500)); // Usado para pegar o menor numero da lista
console.log (Math.random()); // Usado para gerar numeros aleatorios;

// Exemplo de random //
const aleatorio = Math.random () * (10 - 5) + 5;
console.log(aleatorio);
//                  //