document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');

    container.innerHTML = `
        <div class="privacy-box">
            <h1>Avisos de Privacidad</h1>
            <p>De WebNova</p>
            <br>
            <p>Con fecha de vigencia: 9 de abril de 2024</p>
            <p>Última actualización: 9 de abril de 2024</p>
        </div>
        <div class="general-info">
            <h2>Información General</h2>
            <p>WebNova, establecida en Seattle, se dedica a construir relaciones de confianza con nuestros clientes proporcionando soluciones web transparentes y seguras. Nos comprometemos a respetar y proteger tanto la seguridad del cliente como la integridad de nuestra operación. Ofrecemos desarrollo completo de páginas web desde cero, con opciones que van desde personalizaciones profundas en nuestros planes Prime hasta sitios basados en plantillas o WordPress según nuestros planes estándar.</p>
        </div>
            <div class="terms-container">
            <h2>Ventas de Páginas Web</h2>
            <div class="terms-box">
                <ul>
                    <li>Venta de sitios desde cero o a partir de plantillas o WordPress.</li>
                    <li>Personalización según los planes Prime o estándar.</li>
                    <li>Hosting y Dominios: Aunque asistimos en la configuración, estos servicios son adquiridos y gestionados a través de proveedores externos.</li>
                </ul>
            </div>
            <h2>Propiedad Intelectual</h2>
            <div class="terms-box">
                <ul>
                    <li>Derechos de Autor: Todas las páginas web creadas por WebNova están protegidas por derechos de autor. La venta incluye la licencia para usar el diseño, pero no transfiere los derechos de propiedad intelectual del diseño original.</li>
                    <li>Uso de la Página: Los clientes tienen derecho a utilizar las páginas web para su negocio conforme a los términos acordados, sin redistribuir el diseño o el código sin permiso.</li>
                </ul>
            </div>
            <h2>Seguridad y Privacidad</h2>
            <div class="terms-box">
                <ul>
                    <li>Protección de Datos: Nos comprometemos a implementar medidas de seguridad adecuadas para proteger la información personal y de negocio de nuestros clientes.</li>
                    <li>Confidencialidad: Mantenemos la confidencialidad de todos los proyectos y la información del cliente, a menos que se requiera su divulgación por ley.</li>
                </ul>
            </div>
        </div>
    
    `;
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
