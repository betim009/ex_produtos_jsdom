// Imports
import { produtos } from "./data/data.js";
import { createProdutos } from "./scripts/createProdutos.js";

// Setores
const divResultados = document.getElementById('div-resultados');
const divCarrinho = document.getElementById('div-carrinho');


// Variaveis globais




// Funções
// Criar uma função para criar os primeiros elementos na tela.



// Eventos
window.addEventListener('load', () => {
    createProdutos(produtos, divResultados);
});