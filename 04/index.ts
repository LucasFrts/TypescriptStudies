const frase = "Front end"
const preco : number = 500
const condi : boolean = false

console.log(typeof frase)
console.log(typeof preco)
console.log(typeof document)

if(typeof frase === 'string'){
    frase.toLowerCase()
    console.log('frase é string')
}else{
    console.log('frase não é string')
}


let total: string | number = 200


function isNumber(value:string | number):boolean{
    return typeof value == 'number'
}
if(isNumber(total)){
    console.log('é um numero')
}

const button = document.querySelector('button')
button?.click()

// exercicio

const toNumber = (value : number | string) : number=>{
   if(typeof value === 'number'){
    return value
   }
   else if (typeof value == 'string') return Number(value)
    throw 'value deve ser um número | string'
}
console.log(toNumber("900"))