document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

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
});

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