document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.header__menu__small__form')

    document.querySelector('#button-burguer').addEventListener('click', function(){
        if (form.classList.contains('open')) {
            form.classList.remove('open')
        } else {
            form.classList.add('open')
        }
    })
    
    const secaoHero = document.querySelector('.hero');
    const alturaHero = secaoHero.clientHeight;n
    const header = document.querySelector('.header');
    const headerLinks = document.querySelector('.header__links');

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        const larguraTela = window.innerWidth; // Obtém a largura da tela

        if (posicaoAtual >= alturaHero) {
            header.classList.add('header--on-middle');

            if (larguraTela >= 768) { 
                headerLinks.style.display = 'none'; // Esconde os links apenas em telas maiores
            } else {
                headerLinks.style.display = 'flex'; // Mantém os links visíveis em telas pequenas
            }
        } else {
            header.classList.remove('header--on-middle');
            headerLinks.style.display = 'flex'; // Mostra os links em todas as telas quando a posição é menor que a altura da hero
        }
    });
});
