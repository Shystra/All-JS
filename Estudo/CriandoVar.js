let a = 'A'; // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
console.log ()

// SOPUNHETAMOS

const numeros = [1000,2000,3,4,5,6,7,8,9];
const [um, , tres , , cinco] = numeros;
console.log(um, tres, cinco);
//console.log(resto)