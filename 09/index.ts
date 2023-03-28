class Produto {
    name:string;
    preco:number;
    constructor(name:string, preco:number){
        this.name = name;
        this.preco = preco;
    }
}
const livro = new Produto("A Guerra dos Tronos", 200)
console.log(livro instanceof Produto)

class Livro extends Produto {
    autor:string;
    constructor(autor:string, nome:string, preco:number){
        super(nome, preco);
        this.autor = autor;
    }
}
class Jogo extends Produto{
    jogadores:number;
    constructor(jogadores:number, nome:string, preco:number){
        super(nome, preco);
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca:string){
    if(busca === 'O Hobbit'){
        return new Livro('J. R. R. Tolkien', 'O senhor dos Aneis', 200)
    }
    if(busca === 'Dark Souls'){
        return new Jogo(1, "Dark Souls", 365)
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
if(produto instanceof Produto){
    console.log(produto.name)
}


const link = document.getElementById('origamid')

if(link instanceof HTMLAnchorElement){
    link.href = link.href.replace('http://', 'https://')
}