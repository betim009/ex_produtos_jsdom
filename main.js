// Imports
import { produtos } from "./data/data.js";
import { createProdutos } from "./scripts/createProdutos.js";

// Setores
const divResultados = document.getElementById('div-resultados');
const divCarrinho = document.getElementById('div-carrinho');
const btnSearch = document.getElementById('btn-search');
const querySearch = document.getElementById('query-search');
const valorTotal = document.getElementById('valor-total');

// Variaveis globais
let valorCarrinho = 0;

// Funções
function handleClickSearch() {
    const queryValue = querySearch.value;
    const buscaDeProdutos = produtos.filter((e, i) => e.nome.includes(queryValue));
    createProdutos(buscaDeProdutos, divResultados);
};

function createItemsCar(i) {
    divCarrinho.innerHTML += `
        <div>
            <p>${produtos[i].nome}</p>
        </div>
    `
};

function createValorTotal(i) {
    valorCarrinho += produtos[i].preco;
    valorTotal.innerHTML = `Valor total é: ${valorCarrinho}`;
};

function handleCarrinho() {
    const btnsAddCars = document.querySelectorAll('.btns-add-car');
    const btnsFinalizar = document.querySelectorAll('.btns-finalizar');

    btnsAddCars.forEach((e, i) => {
        e.addEventListener('click', () => {
            createItemsCar(i);
            createValorTotal(i);
        });
    });

    btnsFinalizar.forEach((e, i) => {
        e.addEventListener('click', () => {
            btnsAddCars.forEach((e) => e.disabled = true);
        });
    });
};

// Eventos
window.addEventListener('load', () => {
    createProdutos(produtos, divResultados);
    handleCarrinho();
});

btnSearch.addEventListener('click', () => {
    handleClickSearch();
    handleCarrinho();
});