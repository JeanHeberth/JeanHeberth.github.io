document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);

            // Fecha todas as seções abertas
            const allCards = document.querySelectorAll('.card');
            allCards.forEach(card => {
                if (card !== targetCard) {
                    card.classList.remove('active'); // Fecha todas as outras seções
                }
            });

            // Alterna a seção clicada
            targetCard.classList.toggle('active'); // Abre ou fecha a seção clicada
        });
    });
});
