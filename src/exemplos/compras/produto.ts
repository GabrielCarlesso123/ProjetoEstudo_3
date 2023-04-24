
let INC = 0

export class Produto {

    id = 0

    constructor(
        public nome: string,
        public preco: number,
        public quantidade: number
    ){
        
    }

    calcula(){
        return this.preco * this.quantidade
    }

    toString(){
        return `O produto ${this.nome} com preço ${this.preco} e quantidade ${this.quantidade}`
    }


    html(produto: Produto){

        return `
        <tr class="produto-${produto.id}">
            <td>${this.nome}</td>
            <td>${this.quantidade}</td>
            <td>${this.preco}</td>
            <td><button data-id="${produto.id}"X</button></td>

        </tr>
        `

    }


}

// const produtos: Produto[] = [
//     new Produto('Batata', 5, 2),
//     new Produto('Coca Cola', 8, 12)
// ]

// produtos.forEach(produto => {
//     console.log(produto.toString())
// })