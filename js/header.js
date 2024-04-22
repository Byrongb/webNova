document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const body = document.body;

    headerContainer.innerHTML = `
    <header class="header">
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


