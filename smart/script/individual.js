document.addEventListener("DOMContentLoaded", () => {

    // identificar o html pelo id
const urlParams =
    new URLSearchParams(window.location.search);
const id =
    urlParams.get("id");
const produto =
    produtos.find(p => String(p.id) === id);
window.produtoAtual = produto;

    if(!produto){
    console.error("Produto não encontrado");
    return;
}

    // aquela parte de clicar na disponibilidade/soliciar orçamento
document.title =
    `${produto.nome} | Smart Shield`;
const mensagem = encodeURIComponent(
    `Olá! Vim pelo site da Smart Shield e gostaria de mais informações sobre ${produto.nome}.`
);
const whatsappLink =
    `https://wa.me/554499485216?text=${mensagem}`;


    // estrutura do html individual
const container =
        document.querySelector("#produto-container");
    container.innerHTML = `

<section class="hero">
    <div class="hero-image">
        <img src="${produto.imagem}">
    </div>
    <div class="hero-content">
        <span class="badge ${produto.badgeClass}">${produto.badge}</span> 
        <h1>${produto.nome}</h1>
        <p class="subtitle">${produto.subtitulo}</p>
        <button onclick="window.open('${whatsappLink}','_blank')">Ver Disponibilidade</button>
    </div>
</section>

<section class="features">
    <h2>Diferenciais</h2>
    <div class="grid">
        ${produto.features.map(feature => `
            <div class="feature">
                <h3>${feature.titulo}</h3>
                <p>${feature.texto}</p>
            </div>
        `).join("")}
    </div>
</section>

<section class="comparison">
    <h2>Estatísticas Visuais</h2>
    <div class="stats-container">
        ${produto.stats.map(stat => `
            <div class="stat">
                <div class="stat-header">
                    <span>${stat.nome}</span>
                    <span class="stat-value" data-value="${stat.valor}">0%</span>
                </div>
                <div class="bar">
                    <div
                        class="fill"
                        data-width="${stat.valor}%">
                    </div>
                </div>
            </div>
        `).join("")}
    </div>
</section>

<section class="cta">
    <h2>${produto.cta.titulo}</h2>
    <button onclick="window.open('${whatsappLink}','_blank')">${produto.cta.botao}</button>
</section>

<section class="related-products">
    <h2>Você também pode gostar de</h2>
    <div class="related-grid"></div>
</section>
`;


const statsSection = container.querySelector(".comparison");
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        const barras = statsSection.querySelectorAll(".fill");
        const valores = statsSection.querySelectorAll(".stat-value");
        barras.forEach((bar, index) => {

            setTimeout(() => {

                // anima a barra
                bar.style.width = bar.dataset.width;

                // anima o número
                const valorFinal = parseInt(valores[index].dataset.value);
                let valorAtual = 0;

                const duracao = 1200; // mesma duração da barra
                const intervalo = 20;
                const incremento = valorFinal / (duracao / intervalo);

                const contador = setInterval(() => {
                    valorAtual += incremento;

                    if(valorAtual >= valorFinal){
                        valorAtual = valorFinal;
                        clearInterval(contador);
                    }

                    valores[index].textContent =
                        `${Math.round(valorAtual)}%`;

                }, intervalo);
            }, index * 150);
        });
        obs.unobserve(entry.target);
    });
},{
    threshold:0.4
});

observer.observe(statsSection);


    // identificar os produtos relacionados
const relacionados = produtos.filter(p =>
        p.categoria === produto.categoria &&
        p.id !== produto.id
    )
    .sort(() => Math.random() - 0.5)
    .slice(0,3);
const relatedGrid =
    document.querySelector(".related-grid");
relacionados.forEach(produto => {
    relatedGrid.innerHTML +=
        criarCardProduto(produto);
});
});
