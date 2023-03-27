const numeros = [10, 20, 30, 40, 50, 3]
const valores = [10, 'Taxas', 30, 'Produto', 50, 3]
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
]

const maiorQueDez = (data:Array<number>)=>{
  return data.filter(n=>n > 10)
}

const filtrarValores = (data:Array<number | string>)=>{
    return data.filter(item => typeof item === 'number')
}
const showDados = (data: Array<Array<string | number>>)=>{
   return data.map((k)=>(`Nome: ${k[0]} Valor: R$ ${k[1]}`))
}
console.log(showDados(dados))
console.log(maiorQueDez(numeros))
console.log(filtrarValores(valores))

interface Cursos {
    nome:string;
    horas:number;
    aulas:number;
    gratuito:boolean;
    tags:Array<string>;
    idAulas:Array<string>;
    nivel: "iniciante" | "avançado"
}

const fetchApi = async (url:string)=>{
    const response = await fetch(url)
    const data = await response.json()
    return data
}

const showCursos = (data:Array<Cursos>)=>{
    for(let i = 0; i < data.length; i++){
        document.body.innerHTML += `
            <div>
                <h3>Curso: ${data[i].nome}</h3>
                <p>Carga Horária: ${data[i].horas}h</p>
                <p>Aulas: ${data[i].aulas}</p>
                <p>Gratuito: ${data[i].gratuito ? "Sim" : "Não"}</p>
                <ul>
                    ${
                        data[i].tags.forEach((tag))
                    }
                </ul>
            </div>
        `
    }
}






