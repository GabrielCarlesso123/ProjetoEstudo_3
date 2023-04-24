class NomeDaClasse {
    constructor(
        private peso: number,
        private altura: number
    ){}
    #formata(valor: number) {

        switch(true){
            case valor < 18.5: return 'Abaixo do peso';
            case valor < 25: return 'Peso normal';
            case valor < 30: return 'Sobrepeso';
            default: return 'Obesidade'
        }

    }
    calcular(){
        const formatado = this.#formata(this.peso / (this.altura * this.altura)) 
        return formatado
    }
}

// const imc2 = {
//     peso: prompt('Peso') ?? '0',
//     altura: prompt('Altura') ?? '0'
// }

// const nomeDaClasse = new NomeDaClasse(+imc2.peso, +imc2.altura)

// console.log(nomeDaClasse.calcular())
