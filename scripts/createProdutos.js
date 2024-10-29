export function createProdutos(listaDeProdutos, div) {
    listaDeProdutos.map((e, i) => (
        div.innerHTML += `
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