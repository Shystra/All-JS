const elementos = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

// Pegando o elemento .container da HTML
const container = document.querySelector('.container');
const div = document.createElement('div');
//


for (let i = 0; i < elementos.length; i++) {
    const { tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;  // Dessa forma ele vai criar um texto no elemento
    div.appendChild(tagCriada); //Na div ele vai adicionar a tag criada
    console.log(tag)
}

container.appendChild (div);