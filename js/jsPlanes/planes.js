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
                    <a name="at-link" href="planesp.html">
                        <span>Quiero Sitio Web</span>
                    </a>
                </at-link>
            </li>
        </ul>
        <div class="portada">
        <img src="https://bnz07pap001files.storage.live.com/y4meU6Sy6YmvEKMnp7EElbp8aNBUr9qLKZH4wbxZW_s6Kf3W4y2HyxmGmK1W4Ax2GAWsm6ey0djcneNX2zOr12aFw1r4ngYnpaJUACXF5nLsU6Gj1RxPIZLPHMJJVUsErdNUye6aPSL0Rza6qCBEpEE5dmhmrlUrSFJkJPTNa-l1VpsQt0NaSFfTqAopAF7nUunMEutn9uk8b1QmbZ8w3ReJTwWa5RLGHrdtu8hCJ9hwa0?encodeFailures=1&width=837&height=581"  class="img-portada">
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
            ${createAdvantage('Soporte Dedicado', 'Contamos con un equipo de soporte técnico disponible 24/7 para asegurar el funcionamiento óptimo de tu sitio web.', 'https://bnz07pap001files.storage.live.com/y4m5aEwmnuU2Et_3m5S1oXUdrZMED3t60hz_munopLjDBBr0wg6NcRwsUWmLA-iOdRB8STosQi56EOkpInNLFmxAMwOa9o8wcJXoFZ3CvvkT4TxTvzp8YEU0BfF4wb2a04yr9Qy3JjGF_l1ZzgCOtQqeI2TJxl4hTFtz_Mik5qzF9VvfAQsEvBrpoypGLZAt8BJNmzll7vmMKQ0AjWm105UBnGrzGZc1iXUlkn7o8HJpwQ?encodeFailures=1&width=595&height=419')}
            ${createAdvantage('Tecnología de Punta', 'Utilizamos las últimas tecnologías para desarrollar sitios web que no solo lucen bien, sino que también son rápidos y seguros.', 'https://bnz07pap001files.storage.live.com/y4m3QE1DyxhwcpB8agWvEjFUGtMa450sl6yL3xuFULnXntPqvGCMeQv9bdG4Xg9-RnOMZr3n7iOJhUxCQ5ZlufAva7XMHot6279jf62VPpD27Qxqvp54WYqVPMe5grU3Nu_vS2WCVxMFHkZSaEfUDuU5ZIGnrWhRvzK57iI-ZKJxvqqxQF3RlkrsbeApA-fI2CAoUfa2d8EUUK8lLJdcPji3DCaRBpzbSsHtYVPwvAWf3U?encodeFailures=1&width=517&height=482')}
            ${createAdvantage('Diseño Personalizado', 'Cada proyecto es único. Desarrollamos diseños personalizados que reflejan la esencia de tu marca.', 'https://bnz07pap001files.storage.live.com/y4mopJlB2faqdBsgrSTkw0fRhZcTZMApVcgf-L1zGMvGqtC5vAF8hwfhnfa0p1C2DEKgqtJ0bUP0T7NrTPWVugXgMZeqLXhRwttKpRLPtEprozWD96eAJ8Ccj5TOHm8OAdl1tsVeRQun3jmrivH2KTT-rwR5_w_HF2zsUX5bdyqcWlGJNVRtY0-TMg7ofWJicjCK_x3wwwz2Iqv5dmRhtNAmLLlJRV9O3XqQikfR5CkF5Q?encodeFailures=1&width=584&height=427')}
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
               