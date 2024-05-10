document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');

    container.innerHTML = `
        <div class="contact-section">
            <h1>Contacta con Nosotros</h1>
            <p>Si tienes preguntas o necesitas más información, estamos aquí para ayudarte:</p>
            <div class="contact-info">
                <div class="contact-box">
                    <h2>Teléfono</h2>
                    <p>+1 (206) 556-0771</p>
                </div>
                <div class="contact-box">
                    <h2>Correo Electrónico</h2>
                    <p><a class="mail" href="mailto:byronhernan1613@gmail.com">byronhernan1613@gmail.com</a></p>
                </div>
            </div>
            <div class="email-form">
                <h2>Envíanos un Mensaje</h2>
                <form action="sendEmail.php" method="POST">
                    <input type="text" name="name" placeholder="Tu nombre" required>
                    <input type="email" name="email" placeholder="Tu correo electrónico" required>
                    <textarea name="message" placeholder="Escribe tu mensaje aquí..."></textarea>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </div>
        <div class="feedback-section">
            <h2>Envía tu Opinión</h2>
            <form id="feedback-form">
                <label for="rating">Calificación:</label>
                <div class="rating">
                    ${[...Array(5)].map((_, index) => `
                    <span class="star" data-value="${index + 1}">&#9733;</span>
                    `).join('')}
                </div>
                <textarea name="comment" placeholder="Escribe tu comentario aquí..."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    `;

    // Setup star rating
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            const ratingValue = star.getAttribute('data-value');
            star.parentNode.querySelectorAll('.star').forEach(s => {
                s.style.color = s.getAttribute('data-value') <= ratingValue ? '#ffc107' : '#e4e5e9';
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container'); // Asegúrate de tener este contenedor en tu HTML

    footerContainer.innerHTML = `
    <footer class="footerE">
        <div class="footer-infoE">
            <p>© 2024 WebNova. Todos los derechos reservados.</p>
            <p>Correo: contacto@webnova.com</p>
            <p>Teléfono: +123 456 7890</p>
        </div>
        <div class="footer-linksE">
            <a href="#!">Política de Privacidad</a>
            <a href="#!">Términos de Servicio</a>
        </div>
        <div class="footer-socialE">
            <a href="#!" class="social-linkE">Facebook</a>
            <a href="#!" class="social-linkE">Twitter</a>
            <a href="#!" class="social-linkE">Instagram</a>
        </div>
    </footer>
`;
});