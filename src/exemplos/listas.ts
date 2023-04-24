import { Pessoa } from "./pessoa"

const listaDePessoas: Pessoa[] = []

listaDePessoas.push(
    {nome: 'Ana', idade: 23},
    {nome: 'Gui', idade: 25},
    {nome: 'Thiago', idade: 43}
)

function log<T>(value: T, index: number, array: T[]){
    //console.log(value)
    return {...value}
}

const pessoas = listaDePessoas.map((log))

// console.log(pessoas)

// listaDePessoas.forEach((element) => console.log(element))

// listaDePessoas.forEach((value: Pessoa, index: number) => console.log(index, value))

// function pergunta(){
//     const nome = prompt('Qual seu nome?') ?? ''
//     const idade = parseInt(prompt('Qual sua idade?') ?? '')

//     if(nome.length > 0 && !isNaN(idade)){

//         listaDePessoas.push({nome, idade})
//         console.log(listaDePessoas)
//         document.body.append(
//             JSON.stringify(listaDePessoas)
//         )
//     }
// }

//pergunta()




//console.table(listaDePessoas)