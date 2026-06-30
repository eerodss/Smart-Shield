
/* parte do destaque */
document.addEventListener("DOMContentLoaded", () => {
const grid =
    document.querySelector(".featured-grid");
if(!grid) return;
const destaques =
    produtos.filter(
        produto => produto.destaque
    );


    /** animação bonitinha pra aparecer tudo */
const reveals =
    document.querySelectorAll(".reveal");
const observer =
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    },{
        threshold:0.15
    });
reveals.forEach(item => {
    observer.observe(item);
});

    /** a parte para os produtos aparecem no destaque */
destaques.forEach(produto => {
const rotacao =
    (Math.random() * 8 - 4).toFixed(1);

    grid.innerHTML += `
        <div class="featured-card"
            style="--hover-rotate:${rotacao}deg;"
            onclick="window.location.href='individual.html?id=${produto.id}'">
            <span class="badge ${produto.badgeClass}">${produto.badge}</span>
            <img src="${produto.imagem}">
            <h3>${produto.nome}</h3>
            <div class="description-wrapper"
                data-full="${produto.descricao}">
                <p>${produto.descricao}</p>
            </div>
        </div>
    `;
});
});


    /** parte da distribuição das categorias */
document.querySelector("#distribuicao")
        .addEventListener("click", () =>{
            window.open(
                "https://wa.me/554499485216?text=Olá, vim pelo site e gostaria de saber mais sobre a distribuição da Smart Shield!","_blank"
            );
        });


 /* eu acho que é pra parte das categorias, pra clicar nelas e ir pro html clicado, mas eu só acho */
    document.querySelectorAll("#produtos")
        .forEach(card => {
    card.addEventListener("click", () => {
const filtro =
    card.dataset.filter;
        window.location.href =
        `produtos.html?categoria=${filtro}`;
    });
});


    /** eu acho que na hora que clica pra voltar, esse js faz voltar na parte da página que tava antes */
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
        window.location.href =
        `produtos.html?categoria=${filter}`;
    }


    /** aqui spa que é a pesquisa, mas sla, tem que testar */
const params =
    new URLSearchParams(window.location.search);
const categoria =
    parms.get("categoria");
        if(categoria){
            filtrarProdutos(categoria);
            document 
            .querySelector("#produtos") 
            .scrollIntoView({ 
                behavior:"smooth" 
            });
        };
