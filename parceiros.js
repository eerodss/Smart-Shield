    // FAQ
console.log("FAQ carregou");
const faqs =
    document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    const button =
        faq.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const aberto =
            faq.classList.contains("active");

        faqs.forEach(item => {
            item.classList.remove("active");
            item.querySelector(".faq-answer")
                .style.maxHeight = null;
        });

        if(!aberto){

            faq.classList.add("active");
            const answer =
                faq.querySelector(".faq-answer");
            answer.style.maxHeight =
                answer.scrollHeight + "px";
        }
    });
});