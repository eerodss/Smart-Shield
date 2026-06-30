function criarBreadcrumb(){
    const breadcrumb = document.querySelector("#breadcrumb");

    if(!breadcrumb) return;
    let html = `
        <a href="../index.html">Home</a>
    `;

    // Página catálogo
    if(document.querySelector(".products-page")){
        html += `
            <span class="separator">></span>
            <span>Catálogo</span>
        `;
    }

    // Página individual
    if(window.produtoAtual){

        const categorias = {
            peliculas:"Películas",
            maquinas:"Máquinas",
            acessorios:"Acessórios",
            limpeza:"Limpeza"
        };

        html += `
            <span class="separator">></span>
            <a href="produtos.html">Catálogo</a>

            <span class="separator">></span>
            <span>${categorias[produtoAtual.categoria] || produtoAtual.categoria}</span>

            <span class="separator">></span>
            <span>${produtoAtual.nome}</span>
        `;
    }
    breadcrumb.innerHTML = html;
}