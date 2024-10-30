// Imports
import { produtos } from "./data/data.js";
import { createProdutos } from "./scripts/createProdutos.js";

// Setores
const divResultados = document.getElementById('div-resultados');
const divCarrinho = document.getElementById('div-carrinho');
const btnSearch = document.getElementById('btn-search');
const querySearch = document.getElementById('query-search');

// Variaveis globais
let valorCarrinho = 0;

// Funções
function handleClickSearch() {
    const queryValue = querySearch.value;

    const buscaDeProdutos = produtos.filter((e, i) => e.nome.includes(queryValue));
    createProdutos(buscaDeProdutos, divResultados);
};

// Eventos
window.addEventListener('load', () => {
    createProdutos(produtos, divResultados);
    const btnsAddCars = document.querySelectorAll('.btns-add-car');

    btnsAddCars.forEach((e, i) => {
        e.addEventListener('click', () => {
            divCarrinho.innerHTML += `
                <div>
                    <p>${produtos[i].nome}</p>
                </div>
            `
        });
    });

});

btnSearch.addEventListener('click', handleClickSearch);