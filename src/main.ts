import './style.css'
import '../src/exemplos/vector2'
import '../src/exemplos/pessoa'
import '../src/exemplos/listas'
import '../src/exemplos/imc'
import '../src/exemplos/classes'
import '../src/exemplos/compras'

import {Produto, Carrinho} from './exemplos/compras'


const form = document.querySelector('form')!

const carrinho = new Carrinho()

const table = document.querySelector('table')

form.onsubmit = (ev) => {

    ev.preventDefault()

    const data = new FormData(form)
    const produto = new Produto(
        data.get('nome').toString(),
        +(data.get('preco')),
        +(data.get('quantidade'))
    )

    carrinho.adiciona(produto)

    table.innerHTML = carrinho.html

    



}