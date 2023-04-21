function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}


const exemploPaisagem = (largura, altura) => {
    return largura > altura ? true : false;
}

const numero1 = 2000;
const numero2 = 1920;

//console.log(exemploPaisagem(numero1, numero2))

if (exemploPaisagem(numero1, numero2)) {
    console.log ('Imagem correta')
} else {
    console.log ('Imagem incorreta')
}

// console.log(exemploPaisagem(1080, 1920));