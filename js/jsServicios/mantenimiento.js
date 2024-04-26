document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const body = document.body;

    headerContainer.innerHTML = `
    <header class="headerM" >
        <div class="menu-icon">
        <img src="img/icon menu mantenimiento.png" alt="menu icon"  id="menu-toggle">
        </div>
        <div id="logo-center" class="logo-center">
            <img src="img/logo mantenimiento.png" alt="menu icon"  class="logo">
        </div>
    </header>
    <div id="side-menu" class="side-menu">
        <img src="img/Captura_de_pantalla_2024-04-10_193118-removebg-preview.png" alt="Close Menu" id="menu-close" class="menu-close">
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
                    <a href="mantenimiento.html">Mantenimiento Web</a>
                    <a href="trabajoPersonalizado.html">Trabajo Personalizado</a>
                </div>
            </a>
            <a href="./portafolio.html">Portafolio</a>
            <a id="politicas1">Políticas <span class="arrow3">&#9662;</span>                                                                                                                               
                 <div class="submenu3">
                    <a href="politicasGarantias.html">Garantía</a>
                    <a href="politicasFacturacion.html">Facturación</a>
                    <a href="politicasServicio.html">Servicio</a>
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
        <div class="maintenance-intro">
            <img src="img/portada mantenimiento.png" alt="Mantenimiento Web" class="maintenance-image">
            <h1 class="title">Planes de Mantenimiento</h1>
            <p class="description">Ofrecemos planes de mantenimiento diseñados para mantener tu sitio web actualizado, seguro y funcionando sin problemas. Escoge el que mejor se adapte a tus necesidades.</p>
            <button onclick="window.location.href='contacto.html'" class="contact-button">OBTENER</button>
        </div>
        <div class="plan-container">
            ${createPlan('Básico', 'Ideal para sitios web pequeños que requieren actualizaciones menores y mantenimiento regular.', '$85/mes')}
            ${createPlan('Avanzado', 'Para sitios con necesidades moderadas de actualización y optimización de rendimiento.', '$150/mes')}
            ${createPlan('Premium', 'Cobertura completa con actualizaciones frecuentes, respaldos y seguridad avanzada.', '$250/mes')}
        </div>
    `;

    function createPlan(name, description, price) {
        return `
            <div class="plan">
                <h2 class="plan-title">${name}</h2>
                <p class="plan-description">${description}</p>
                <p class="plan-price">${price}</p>
                <button onclick="window.location.href='contacto.html'" class="contact-button2">OBTENER</button>
            </div>
        `;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.getElementById('footer-container'); // Asegúrate de tener este contenedor en tu HTML

    footerContainer.innerHTML = `
    <footer class="footerM">
        <div class="footer-infoM">
            <p>© 2024 WebNova. Todos los derechos reservados.</p>
            <p>Correo: contacto@webnova.com</p>
            <p>Teléfono: +123 456 7890</p>
        </div>
        <div class="footer-linksM">
            <a href="#!">Política de Privacidad</a>
            <a href="#!">Términos de Servicio</a>
        </div>
        <div class="footer-socialM">
            <a href="#!" class="social-linkM">Facebook</a>
            <a href="#!" class="social-linkM">Twitter</a>
            <a href="#!" class="social-linkM">Instagram</a>
        </div>
    </footer>
`;
});