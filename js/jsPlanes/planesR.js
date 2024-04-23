document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const body = document.body;

    headerContainer.innerHTML = `
    <header class="headerR" >
        <div class="menu-icon">
            <img src="https://bnz07pap001files.storage.live.com/y4mdjd2kzFJAM_YROVhQLlXjppbxwmHa1he8HccbLmZ7QiTEKat3ROAfqM10xjzAeDXQ_UwnRwELyxtZw3w1JaOqkHZJfle1_7sdUOtD1hwJ05E_Y7xm_EK6gUKBN4GY4Gdzkj5n4oeLD4h0UTc5fz1K0bxHn3MCLOBBuQOWmAJnuyfF2FOPDuzPIF3i5b1BhvK-lvEDfeOPceAOCzNJ83GgbT_daE27NW6YmRxReboN_w?encodeFailures=1&width=476&height=375" alt="Menu Icon" id="menu-toggle"> <!-- Espacio para imagen del menú -->
        </div>
        <div id="logo-center" class="logo-center">
            <img src="https://bnz07pap001files.storage.live.com/y4mew0wsE7u1_3A5teCjarUgWdETw_9VgiYytQurq1jjv3D7wUPkv9Tlr6Hf0Atd3SwH7OZViNb5f4RTQmMC8nocJDp5L43MezSmpOMMpLauNnLP9VxhRHILjaDztgg4buA70mF-nhMyde1uwAyZU3gU8lwqhRPbdfuuwKaw_LJK55zwG6xTWp9wUhEIkuxWfmzZ9QpmbHY4Ox_7T19qczMoGTcCztyySJe8gxNvD9UahI?encodeFailures=1&width=440&height=432" alt="WebNova Logo" class="logo">
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
        <div class="intro-section">
            <h1 class="title">Revitaliza Tu Sitio Web con WebNova</h1>
            <p class="description">Transforma tu presencia online con nuestras soluciones innovadoras.</p>
            <img src="https://bnz07pap001files.storage.live.com/y4mMXX3rAqRfALXJX01Q3OA3G3L5NDu05Ttw1rYunEJFyg5OdjF2299AzAOwxk4dTrp0C37FjMVW5KCuIAv2I0ebjzmev7TF5PTT1aY4AO5k7xez6LyjubltPCvIRzRtCT4oRoawHvY0taYNW2WwUqZwCCj604EWIu9XubmZLgLoU0t_lPEuny_uUhFfgmWQIgCXW_x1Set8Xl8pXl96Zcm1cmEFdGP3FWqpbTYYBVunk0?encodeFailures=1&width=503&height=496" alt="Motivational Image" class="feature-image">
        </div>
        <div class="plans-container">
            ${createPlan('Renovación Básica', 'Refresca tu diseño actual con mejoras visuales y funcionales.', '$899', 'Incluye rediseño básico, optimización de carga y actualización de contenido.', ['Rediseño de la interfaz', 'Optimización SEO básica', 'Soporte técnico'])}
            ${createPlan('Renovación Avanzada', 'Amplía las capacidades de tu sitio con características avanzadas.', '$1299', 'Expande tu funcionalidad y mejora la interacción del usuario.', ['Integración de e-commerce', 'Optimización SEO avanzada', 'Analytics mejorado'])}
            ${createPlan('Transformación Total', 'Un cambio completo que redefine tu presencia online.', '$1999', 'Reconstrucción total desde cero con las últimas tecnologías.', ['Diseño personalizado', 'Estrategias de marketing digital', 'Integraciones complejas'])}
        </div>
    `;

    function createPlan(title, summary, price, smallText, features) {
        const featureList = features.map(feature => `<li><span class="check-icon">&#10003;</span> ${feature}</li>`).join('');
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
});


document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container'); // Asegúrate de tener este contenedor en tu HTML

    footerContainer.innerHTML = `
    <footer class="footerR">
        <div class="footer-infoR">
            <p>© 2024 WebNova. Todos los derechos reservados.</p>
            <p>Correo: contacto@webnova.com</p>
            <p>Teléfono: +123 456 7890</p>
        </div>
        <div class="footer-linksR">
            <a href="#!">Política de Privacidad</a>
            <a href="#!">Términos de Servicio</a>
        </div>
        <div class="footer-socialR">
            <a href="#!" class="social-linkR">Facebook</a>
            <a href="#!" class="social-linkR">Twitter</a>
            <a href="#!" class="social-linkR">Instagram</a>
        </div>
    </footer>
`;
});