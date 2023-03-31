function retorno<variavel>(a:variavel):variavel {
    return a
}
console.log(retorno<string>('again').toLowerCase())
console.log(retorno<number>(200).toFixed())
console.log(retorno<boolean>(true).valueOf())

const numeros = [1,2,3,4,5,6,7,8,9]
const frutas = ['banana', 'pera', 'uva', 'laranja', 'limao', 'maçã']

function firstFive <TipoLista>(lista:Array<TipoLista>):Array<TipoLista>{
    return lista.slice(0, 5)
}
console.log(firstFive(numeros).map(item=>item.toFixed()))
console.log(firstFive(frutas).map(item=>item.toUpperCase()))

function notNull<T>(arg:T){
    return arg != null ? arg : null
}
notNull('andré')?.toLowerCase();
notNull(200)?.toFixed();

function tipoDado <T>(a:T): {dado: T, tipo:string}{
    const resultado = {
        dado: a,
        tipo: 
        typeof a
    };
    return resultado
}
console.log(tipoDado(200))

const extractText = <T extends HTMLElement> (element: T)=>{
    return {
       texto: element.innerText,
       element
    } 
}


const link = document.querySelector('a')
if(link){
    console.log(extractText(link).element.href)
}
function $ <T extends Element>(selector:string): T |  null{
    return document.querySelector(selector)
}
const a = $<HTMLAnchorElement>('a')


const selector = document.querySelector<HTMLAnchorElement>('.link')

if(link instanceof HTMLAnchorElement){
    link?.href
}
const fetchApi = async <T>(url:string):Promise<T>=>{
    const response  = await fetch(url)
    const data = await response.json()
    return data
}

interface notebook{
    nome:string;
    preco:number;
}

const handleData = async ()=>{
    const notebook = await fetchApi<notebook>('https://api.origamid.dev/json/notebook.json')
    return notebook
}

const data = handleData()