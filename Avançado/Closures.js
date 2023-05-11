
// 3° corpo (global)
function retornaFuncao() {// 2°
    const nome = 'Luiz';
    return function(){// 1°
        return nome;
    };// 1°
}// 2°
// Closures é a habilidade que uma função tem de acessar seu scopo léxico,
// Ou seja, a habilidade de acessar o primeiro, segundo e terceiro corpo;


const funcao = retornaFuncao();
