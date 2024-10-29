// Imports
import { produtos } from "./data/data.js";



// Setores
const divResultados = document.getElementById('div-resultados');
const divCarrinho = document.getElementById('div-carrinho');


// Variaveis globais




// Funções
// Criar uma função para criar os primeiros elementos na tela.
function createProdutos(listaDeProdutos) {
    listaDeProdutos.map((e, i) => (
        divResultados.innerHTML += `
            <div>
                <img class="img-thumb" src="${e.thumb}" alt="" />
                <h2>${e.nome}</h2>
                <p>${e.preco}</p>
                <button>Add Carrinho</button>
                <button>Finalizar</button>
            </div> 
        `
    ));
};

createProdutos(produtos);




// Eventos
