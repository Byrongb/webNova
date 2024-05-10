document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content'); // Asegúrate de que este ID exista en tu HTML

    container.innerHTML = `
        <img src="img/Captura de pantalla 2024-04-22 153857.png" alt="Descripción de la imagen" class="feature-image">
        <h1 class="title">Nuestros Planes Estándar</h1>
        <p class="description">Explora los planes diseñados para ofrecerte la mejor relación calidad-precio.</p>
        <div class="plans-container">
            ${createPlan('Estándar Básico', 'Ideal para pequeños negocios.', '$999.00', 'Válido para plantillas del portafolio', ['Plantilla', 'Tres (3) páginas internas', 'Texto', 'Galería de fotos'])}
            ${createPlan('Estándar Plus', 'Perfecto para empresas en crecimiento.', '$1299.00', 'Válido para plantillas del portafolio', ['Todo lo del Estándar Básico', 'Cinco (5) páginas internas', 'Blog', 'Redes Sociales', 'Iniciar sesión con Facebook', 'Gestión de contenidos (modificación mínima de plantilla)'])}
            ${createPlan('Estándar Élite', 'Completo para grandes empresas.', '$1499.00', 'Válido para plantillas del portafolio', ['Todo lo del Estándar Plus', ' Siete (7) páginas internas', 'Completo para grandes empresas.',  'Comunidad', 'Eventos', 'Carrusel de opiniones (calificaciones)', 'Múltiples actualizaciones', 'Gestión de contenidos (modificación media de plantilla)'])}
        </div>
    `;

    function createPlan(title, summary, price, smallText, features) {
        const featureList = features.map(feature => `<li> <span class="check-icon" translate="no" url-image"img/image-removebg-preview (5).png"></span> ${feature}</li>`).join('');
        return `
            <div class="plan">
                <h2 class="plan-title">${title}</h2>
                <p class="plan-summary">${summary}</p>
                <p class="plan-price">${price}</p>
                <p class="small-text">${smallText}</p>
                <ul class="plan-features">${featureList}</ul>
                <button class="contact-button">Modificar Mi Página</button>
            </div>
        `;
    }

    document.querySelectorAll('.contact-button').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'contacto.html'; // Asegúrate de que esta URL sea correcta
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