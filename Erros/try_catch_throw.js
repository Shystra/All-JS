function soma(x, y) {
    if (
        typeof x !== 'number' || typeof y !== 'number'
    ) 
    {
        throw new Error('X e Y precisam ser numeros.');
    }

    return x + y
}

// Caso o erro exista a função abaixo vai executar
try {
    console.log(soma('1', 2))
} catch(error){  
    //console.log(error);
    console.log('X e Y precisam ser numeros.');
}