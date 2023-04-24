import { Produto } from "./produto";

export class Carrinho{

    #itens: Produto[] = []

    get total(){

        return this.#itens.reduce((prev, curr) =>{
            return prev + curr.preco * curr.quantidade
        }, 0)
    }

    get html(){
        const thead = `
        <thead>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
        </thead>`

        const tbody = document.createElement('tbody')
        this.#itens.forEach(produto => {
            tbody.innerHTML += produto.html(produto)
        })

        const tfoot = `
        <tfoot>
            <th></th>
            <th></th>
            <th>${this.total}</th>
        </tfoot>
        `

        return thead + tbody.innerHTML + tfoot
    }

    adiciona(...produtos: Produto[]){
        this.#itens.push(...produtos)
    }

    adicionaUm(produto: Produto){
        this.#itens.push(produto)
    }

    adicionaMuitos(produtos: Produto[]){

        produtos.forEach(produto => {
            this.#itens.push(produto)
        })
    }
}

// const batata = new Produto('Batata', 2, 10)
// const cocaCola = new Produto('Coca Cola', 8, 15)


// const carrinho = new Carrinho()

// carrinho.adicionaUm(batata)
// carrinho.adicionaMuitos([batata, cocaCola])
// carrinho.adiciona(batata, cocaCola)

// console.log(carrinho.total)