document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual <= alturaHero) {
            ocultaElementosDoHeader();
    }else{
        exibeElementosDoHeader();
    }
});

    //Seção de atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            const abaAlvo = this.dataset.tabButton;
            const abas = document.querySelectorAll(`[data-tab-id="${abaAlvo}"]`);
            escondeAbas();
            abas.forEach(aba => {
                aba.classList.add('shows__list--is-active');
            });
            removeBotaoAtivo();
            this.classList.add('shows__tabs__button--is-active');
        });
    }

    // Seção faq Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function ocultaElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}
function exibeElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function escondeAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');
    
    abas.forEach(aba => {
        aba.classList.remove('shows__list--is-active');
    });
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}