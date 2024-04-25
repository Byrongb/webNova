document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content'); // Asegúrate de que este ID exista en tu HTML

    container.innerHTML = `
        <ul>
            <li>
                <at-link class="at-linkP">
                    <a name="at-link" href="planesR.html">
                        <span>Tengo Sitio Web</span>
                    </a>
                </at-link>
            </li>
            <li>
                <at-link class="at-linkP">
                    <a name="at-link" href="planesP.html">
                        <span>Quiero Sitio Web</span>
                    </a>
                </at-link>
            </li>
        </ul>
        <div class="portada">
        <img src="img/Captura de pantalla 2024-04-24 172653.png" alt="Descripción de la imagen"  class="img-portada">
        </div>
        <h2 class="info-title">Potencia tu Negocio</h2>
        <button id="details-button" class="details-button">Obtener Sitio Web</button>
        <div class="more-info-container">
            <h3>Elije Tu Estilo con WebNova</h3>
            <p class="info-text">Selecciona cualquier plantilla de nuestro extenso portafolio y personalízala para que se adapte perfectamente a las necesidades de tu negocio. Con WebNova, transformarás tu presencia en línea utilizando diseños probados que destacan por su eficacia y atractivo visual.</p>
            <button onclick="window.location.href='portafolio.html'" id="verPortafolio" class="see-plans">VER PORTAFOLIO</button>
            <p class="small-text">Explora nuestras opciones para encontrar el diseño que más se alinea con tu visión empresarial. Personalización a tu medida.</p>
        </div>


        <div class="advantages-section">
            <h1 class="title">Descubre las Ventajas de WebNova</h1>
            ${createAdvantage('Soporte Dedicado', 'Contamos con un equipo de soporte técnico disponible 24/7 para asegurar el funcionamiento óptimo de tu sitio web.', 'img/image-removebg-preview (7).png')}
            ${createAdvantage('Tecnología de Punta', 'Utilizamos las últimas tecnologías para desarrollar sitios web que no solo lucen bien, sino que también son rápidos y seguros.', 'img/image-removebg-preview (8).png')}
            ${createAdvantage('Diseño Personalizado', 'Cada proyecto es único. Desarrollamos diseños personalizados que reflejan la esencia de tu marca.', 'img/image-removebg-preview (12).png')}
        </div>
        <div class="buttons-container">
            <button onclick="window.location.href='planesE.html'">Planes Estándar</button>
            <button onclick="window.location.href='planesR.html'">Renovación Web</button>
            <button onclick="window.location.href='planesP.html'">Planes Prime</button>
        </div>
    `;

    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'planesP.html'; // Asegúrate de que esta URL sea correcta
        });
    });

    function createAdvantage(title, description, imageUrl) {
        return `
            <div class="advantage">
                <img src="${imageUrl}" alt="${title}">
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        `;
    }
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
               