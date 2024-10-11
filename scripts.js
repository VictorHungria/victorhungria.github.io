// Scroll Suave ao clicar nos links do menu
document.querySelectorAll('.nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Interatividade nos Campos do Formulário (Exemplo de Feedback Visual)
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#F1C40F';
    });
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
    });
});
