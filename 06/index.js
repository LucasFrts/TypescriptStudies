"use strict";
const fetchApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
};
const showProduct = (dados) => {
    document.body.innerHTML = `
        <div>
            <h2>Nome: ${dados.nome}</h2>
            <h3>Preço: R$ ${dados.preco}</h3>
            <p>Descrição: ${dados.descricao}</p>
            <p>Garantia: ${dados.garantia} Anos</p>
            <p>Seguro: ${dados.seguroAcidentes ? "SIM" : "NÃO"}</p>
            <b>Fabricante: ${dados.empresaFabricante.nome}</b>
            <p>Fundação: ${dados.empresaFabricante.fundacao}</p>
            <p>Origem: ${dados.empresaFabricante.pais}</p>
            <b>Montadora: ${dados.empresaMontadora.nome}</b>
            <p>Fundação: ${dados.empresaMontadora.fundacao}</p>
            <p>Origem: ${dados.empresaMontadora.pais}<p/>

        </div>
    `;
};
fetchApi('https://api.origamid.dev/json/notebook.json');
