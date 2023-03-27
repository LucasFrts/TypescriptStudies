type NumberOrString = string | number
let total : NumberOrString

interface Produto {
    nome:string;
    preco:number;
    teclado:boolean;
}

function preencherDados(dados: Produto){
    document.body.innerHTML += `
    <div>
        <h2>
        ${dados.nome}
        </h2>
        <p>R$ ${dados.preco}</p>
        <small>Inclui teclado: ${dados.teclado ? "SIM" : "NÃO"}</small>
    </div>
    `

}

const computador:Produto = {
    nome:"Computador",
    preco: 1500,
    teclado:false
}
const notebook:Produto = {
    nome:"Notebook",
    preco: 2500,
    teclado:true
}
preencherDados(computador)
preencherDados(notebook)

type Categorias = 'design' | 'codigo' | 'descod'

function pintarCategoria(categoria:Categorias){
    console.log(categoria)
    if(categoria === 'design') console.log("Pintar vermelho")
}
pintarCategoria("codigo")