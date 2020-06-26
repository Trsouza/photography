
function fecharMenu() {
    $('.fechar-menu').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('.navbar-toggler').click(); // FAZ UM CLIQUE NO BOTAO QUE CHAMA O MENU PARA OCULTAR O MENU
        return false;
    }); 
}