function nextPage(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Exibe a página que foi clicada
    document.getElementById(pageId).classList.add('active');
}

function previousPage(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Exibe a página anterior
    document.getElementById(pageId).classList.add('active');
}
