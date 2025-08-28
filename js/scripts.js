document.addEventListener('DOMContentLoaded', () => {
    // Atualiza o ano no rodapé
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    const buttons = document.querySelectorAll('.toggle-btn');

    // Função que fecha todas as sections ativas, exceto a de destino
    const closeAllExcept = (targetCard) => {
        document.querySelectorAll('.card').forEach(card => {
            if (card !== targetCard) card.classList.remove('active');
        });
        // Atualiza aria-expanded nos botões
        buttons.forEach(btn => {
            const id = btn.getAttribute('data-target');
            const card = document.getElementById(id);
            btn.setAttribute('aria-expanded', card && card.classList.contains('active') ? 'true' : 'false');
        });
    };

    // Abre/fecha a card vinculada ao botão clicado
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetCard = document.getElementById(targetId);
            if (!targetCard) return;

            // Alterna estado
            const willOpen = !targetCard.classList.contains('active');
            if (willOpen) {
                closeAllExcept(targetCard);
                targetCard.classList.add('active');
                button.setAttribute('aria-expanded', 'true');
                // rolagem suave até o card
                targetCard.scrollIntoView({behavior: 'smooth', block: 'start'});
                history.replaceState(null, '', `#${targetId}`);
            } else {
                targetCard.classList.remove('active');
                button.setAttribute('aria-expanded', 'false');
                history.replaceState(null, '', window.location.pathname);
            }
        });
    });

    // Se houver hash na URL, abre correspondente ao carregar
    if (location.hash) {
        const id = location.hash.replace('#', '');
        const btn = document.querySelector(`.toggle-btn[data-target="${id}"]`);
        const card = document.getElementById(id);
        if (btn && card) {
            card.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
            setTimeout(() => card.scrollIntoView({behavior: 'smooth', block: 'start'}), 120);
        }
    }
});

const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jean Heberth Souza Vieira",
    "jobTitle": "QA Engineer (SDET) / Java Spring Boot Developer",
    "email": "mailto:jeanheberth19@gmail.com",
    "telephone": "+55-61-99206-2328",
    "url": "https://jeanheberth.github.io/",
    "sameAs": [
        "https://www.linkedin.com/in/jeanheberth",
        "https://github.com/JeanHeberth"
    ],
    "knowsAbout": [
        "Test Automation","Selenium","Cypress","Playwright","Appium",
        "RestAssured","API Testing","Web Testing","Mobile Testing",
        "Java","Spring Boot","JUnit","Python","PyTest",
        "CI/CD","Jenkins","Docker","GitLab CI","Quality Assurance",
        "TDD","BDD","Cucumber","JMeter","Scrum","Kanban",
        "MySQL","MongoDB","PostgreSQL","LGPD","ISO 9001","ISO 27001",
        "Postman","SoapUI","SOAP Services","Backend Testing"
    ]
};

// injeta no <head>
const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.head.appendChild(script);

