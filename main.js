// dropdown
const dropdownLinks =
    document.querySelectorAll(".dropdown-filter");
    dropdownLinks.forEach(link => { 
        link.addEventListener("click", (e) => {
            e.preventDefault();

const filter = 
    link.dataset.filter;
const estaNaPaginaProdutos =
    document.querySelector(".products-page");
    if(estaNaPaginaProdutos){
        filtrarProdutos(filter);
        document
        .querySelector("#produtos")
        .scrollIntoView({
            behavior:"smooth"
        });
    } else{
        console.log(filter);
        window.location.href =
        `produtos.html?categoria=${filter}`;
    }
        }); 
    });


        // breadcrumb
const breadcrumb = document.querySelector("#breadcrumb");

if (breadcrumb && window.produtoAtual){
    const produto = window.produtoAtual;
    breadcrumb.innerHTML = `
        <a href="./index.html">Início</a>
        <span>›</span>
        <a href="produtos.html">Catálogo</a>
        <span>›</span>
        <a href="produtos.html?categoria=${produto.categoria}">
            ${nomesCategorias[produto.categoria]}
        </a>
        <span>›</span>
        <span>${produto.nome}</span>
    `;
}

    // voltar pro topo
    const backToTop = document.querySelector("#backToTop");
    if(backToTop){
window.addEventListener("scroll", () => {
    backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
    if(window.scrollY > 500){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});
    }