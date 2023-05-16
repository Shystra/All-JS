function peopleMake (name, lastName, w, k) {
    return {
        name, 
        lastName, 

        talk(coment) {
            return `${this.name} is ${coment}.`;
        },

        width: w,
        kg: k,
        BMI () {
            const indice = this.width / (this.width ** 2);
            return indice.toFixed(2);
        }
        
    };
}

const exemple = peopleMake( 'Lucas', 'Souza', 1.74, 65 );
console.log(exemple)