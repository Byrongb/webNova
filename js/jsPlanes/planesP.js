document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const body = document.body;

    headerContainer.innerHTML = `
    <header id="headerP">
        <div class="menu-icon">
            <img src="img/Captura_de_pantalla_2024-04-10_193118-removebg-preview.png" alt="Menu Icon" id="menu-toggle"> <!-- Espacio para imagen del menú -->
        </div>
        <div id="logo-center" class="logo-center">
            <img src="img/image-removebg-preview (2).png" alt="WebNova Logo" class="logo">
        </div>
        
    </header>
    <div id="side-menu" class="side-menu">
        <img src="https://bnz07pap001files.storage.live.com/y4mdjd2kzFJAM_YROVhQLlXjppbxwmHa1he8HccbLmZ7QiTEKat3ROAfqM10xjzAeDXQ_UwnRwELyxtZw3w1JaOqkHZJfle1_7sdUOtD1hwJ05E_Y7xm_EK6gUKBN4GY4Gdzkj5n4oeLD4h0UTc5fz1K0bxHn3MCLOBBuQOWmAJnuyfF2FOPDuzPIF3i5b1BhvK-lvEDfeOPceAOCzNJ83GgbT_daE27NW6YmRxReboN_w?encodeFailures=1&width=476&height=375" alt="Close Menu" id="menu-close" class="menu-close">
        <div class="menu-item">
            <a href="index.html">Inicio </a>
            <a id="see-plans">Planes <span class="arrow">&#9662;</span>
                <div class="submenu">
                    <a id="planesE">Estándar</a>
                    <a id="planesP">Prime Personalizado</a>
                    <a id="planesR">Renovación Web</a>
                </div>
            </a>
            <a id="servicios">Servicios <span class="arrow2">&#9662;</span>
                <div class="submenu2">
                    <a href="#">Mantenimiento Web</a>
                    <a href="#">Trabajo Personalizado</a>
                </div>
            </a>
            <a href="./portafolio.html">Portafolio</a>
            <a id="politicas1">Políticas <span class="arrow3">&#9662;</span>                                                                                                                               
                 <div class="submenu3">
                    <a href="#">Garantía</a>
                    <a href="#">Facturación</a>
                    <a href="#">Servicio</a>
                </div>
            </a>
            <a href="./contacto.html">Contacto</a>
        </div>
    </div>
    `;
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sideMenu = document.getElementById('side-menu');
    const submenu = document.querySelector('.submenu');
    const submenu2 = document.querySelector('.submenu2');
    const submenu3 = document.querySelector('.submenu3');
    const arrow = document.querySelector('.arrow');
    const arrow2 = document.querySelector('.arrow2');
    const arrow3 = document.querySelector('.arrow3');

    function closeSubmenus() {
        submenu.classList.remove('submenu-active');
        submenu2.classList.remove('submenu-active2');
        submenu3.classList.remove('submenu-active3');
        arrow.classList.remove('arrow-rotate');
        arrow2.classList.remove('arrow-rotate');
        arrow3.classList.remove('arrow-rotate');
    }


    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('menu-active');
        body.classList.add('no-scroll');
    });

    menuClose.addEventListener('click', function() {
        sideMenu.classList.remove('menu-active');
        body.classList.remove('no-scroll');
        closeSubmenus();
    });

    //comentario MODIFICICACION

    arrow.addEventListener('click', function(e) {
        e.stopPropagation();
        submenu.classList.toggle('submenu-active');
        arrow.classList.toggle('arrow-rotate'); // Agrega o quita la clase para rotar la flecha 
    });

    arrow2.addEventListener('click', function(e) {
        e.stopPropagation();
        submenu2.classList.toggle('submenu-active2');
        arrow2.classList.toggle('arrow-rotate'); // Agrega o quita la clase para rotar la flecha
    });

    arrow3.addEventListener('click', function(e) {
        e.stopPropagation();
        submenu3.classList.toggle('submenu-active3');
        arrow3.classList.toggle('arrow-rotate'); // Agrega o quita la clase para rotar la flecha
    });

    body.addEventListener('click', function(event) {
        // Verifica si el clic fue fuera del menú y si el menú está activo
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && sideMenu.classList.contains('menu-active')) {
            sideMenu.classList.remove('menu-active');
            body.classList.remove('no-scroll');
            closeSubmenus();
        }
    });

    document.getElementById('planesE').addEventListener('click', function() { window.location.href = 'planesE.html'; });
    document.getElementById('planesP').addEventListener('click', function() { window.location.href = 'planesP.html'; });
    document.getElementById('planesR').addEventListener('click', function() { window.location.href = 'planesR.html'; });
    document.getElementById('logo-center').addEventListener('click', function() { window.location.href = 'index.html'; });
    document.getElementById('see-plans').addEventListener('click', function() { window.location.href = 'planes.html'; });
    document.getElementById('servicios').addEventListener('click', function() { window.location.href = 'servicios.html'; });
    document.getElementById('politicas1').addEventListener('click', function() { window.location.href = 'politicas.html'; });
    document.getElementById('details-button').addEventListener('click', function() { window.location.href = 'planes.html'; });

   
});


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content'); // Asegúrate de que este ID exista en tu HTML

    container.innerHTML = `
        <img src="img/Captura de pantalla 2024-04-25 151455.png" alt="Descripción de la imagen" class="feature-image">
        <h1 class="title">Nuestros Planes Prime Personalizado</h1>
        <p class="description">Explora los planes diseñados para ofrecerte la mejor relación calidad-precio.</p>
        <div class="plans-container">
            ${createPlan('Prime Silver', 'Ideal para pequeños negocios.', '$1999.00', 'Válido para proyectos nuevos y/o plantillas del portafolio', ['Diseño UX personalizado', '5 páginas internas', 'Gestion de contenidos avanzada', 'Base de datos de usuarios propia', 'Servicio de pagos básico'])}
            ${createPlan('Prime Gold', 'Perfecto para empresas en crecimiento.', '$2499.00', 'Válido para proyectos nuevos y/o plantillas del portafolio', ['Todo lo de Prime Silver', '10 páginas internas', 'Comercio electrónico', 'Reserva', 'Anuncios', 'Suscripciones'])}
            ${createPlan('Prime Platinum', 'Completo para grandes empresas.', '$3499.00', 'Válido para proyectos nuevos y/o plantillas del portafolio', ['Todo lo de Prime Gold', 'Páginas internas ilimitadas', 'Mercado',  'Transmisión en tiempo real de video/audio', 'Integración avanzada con redes sociales y servicios externos', 'Carrusel de opiniones (calificaciones)', 'Múltiples actualizaciones', 'Gestion de base de datos'])}
        </div>
    `;

    function createPlan(title, summary, price, smallText, checklist) {
        const features = checklist.map(item => `<li><span class="check-icon">&#10003;</span>${item}</li>`).join('');
        return `
            <div class="plan">
                <h2 class="plan-title">${title}</h2>
                <p class="plan-summary">${summary}</p>
                <p class="plan-price">${price}</p>
                <p class="small-text">${smallText}</p>
                <ul class="plan-checklist">${features}</ul>
                <button id="contact-button" class="contact-button">CONTACTAR</button>
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
    <footer class="footerP">
        <div class="footer-infoP">
            <p>© 2024 WebNova. Todos los derechos reservados.</p>
            <p>Correo: contacto@webnova.com</p>
            <p>Teléfono: +123 456 7890</p>
        </div>
        <div class="footer-linksP">
            <a href="#!">Política de Privacidad</a>
            <a href="#!">Términos de Servicio</a>
        </div>
        <div class="footer-socialP">
            <a href="#!" class="social-linkP">Facebook</a>
            <a href="#!" class="social-linkP">Twitter</a>
            <a href="#!" class="social-linkP">Instagram</a>
        </div>
    </footer>
`;
});