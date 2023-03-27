class Produto {
    name:string;
    preco:number;
    constructor(name:string, preco:number){
        this.name = name;
        this.preco = preco;
    }
    precoReal(){
        return `R$ ${this.preco},00`
    }
}
const livro = new Produto("A Guerra dos Tronos", 200)
console.log(livro.precoReal())
console.log(livro instanceof Produto)

class Livro {
    autor:string;
    constructor(autor:string){
        this.autor = autor;
    }
}
class Jogo {
    jogadores:number;
    constructor(jogadores:number){
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca:string){
    if(busca === 'O Hobbit'){
        return new Livro('J. R. R. Tolkien')
    }
    if(busca === 'Dark Souls'){
        return new Jogo(1)
    }
    return null;
}

const produto = buscarProduto('O Hobbit')
if(produto instanceof Livro){
    console.log(produto.autor)
}
if(produto instanceof Jogo){
    console.log(produto.jogadores)
}