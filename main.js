// voltar pro topo
    const backToTop = document.querySelector("#backToTop");
    if(backToTop){
    backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});
    }