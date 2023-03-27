const normalizar = (texto:string)=>{
    return texto.trim().toLowerCase();
}
console.log(normalizar('200'))

const button = document.querySelector('button')
const config = localStorage.getItem('config')

if(button){
    button.click();
}
button?.click();

// let total;
// if(total){
//     console.log('total foi definido')
// }else{
//     console.log('total não foi definido')
// }
interface Product {
    nome?: string;
}
const jogo:Product = {
    nome: "Ragnarok"
}
jogo.nome?.toLocaleLowerCase()
