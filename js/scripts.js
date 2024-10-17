document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);

            // Alterna entre mostrar ou esconder o card
            if (targetCard.style.display === "none" || targetCard.style.display === "") {
                targetCard.style.display = "block";
            } else {
                targetCard.style.display = "none";
            }
        });
    });
});
