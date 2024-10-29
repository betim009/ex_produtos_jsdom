export function createProdutos(listaDeProdutos, div) {
    // limpa a div
    div.innerHTML = "";
    
    listaDeProdutos.map((e, i) => (
        div.innerHTML += `
            <div>
                <img class="img-thumb" src="${e.thumb}" alt="" />
                <h2>${e.nome}</h2>
                <p>${e.preco}</p>
                <button class="add-car">Add Carrinho</button>
                <button class="">Finalizar</button>
            </div> 
        `
    ));
};