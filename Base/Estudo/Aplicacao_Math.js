const numero = Number(prompt ("Digite um Número"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

// Para alterar os elemenotos depois de chamalos acima ^ \\

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';

texto.innerHTML += `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN:${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} | inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima> ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;