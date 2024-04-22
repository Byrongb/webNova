document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const body = document.body;

    headerContainer.innerHTML = `
    <header class="header">
        <div class="menu-icon">
            <img src="https://bnz07pap001files.storage.live.com/y4m1vaGoNRW0hRJsLMmi9Fi_WPsZzHA6sNRVL57VMzqkk8e0WqkSFa9mV2yIXztfV2KnnJegrTrU-lTszQ-KbOjStypEck9mXNg2N3zLKhrDUdXGbVnlHbdn_QIi6S1-9zIFc1VGip3-5swmL_qOeaJ_rRXyPeygtSdUO75YVazJ7FQYx3bCcxskhA0zMM3unTKlAvFyDAhnh2r1uaVtUpqyZbbz4Hyt6CRnRgKJAQaawE?encodeFailures=1&width=476&height=375" alt="Menu Icon" id="menu-toggle"> <!-- Espacio para imagen del menú -->
        </div>
        <div class="logo-center">
            <img src="https://bnz07pap001files.storage.live.com/y4mzOgoI7vC9h1pa7M-uHZ7UjRu9BXonnFktaGIyIHlZv677HtwOiY2dGVs2ysS3FC4TCb82Bi2TI2864uyVALbT1d9iwbkZLtPC5ye-c58Yx3gKx_9Z39spunV-Ohaxo3XuSxv5TykF4mwiOOHuBfBqOel8fWPawtUkfzxEIPhLbPxJcmU3Quiqrw5MIOAhq-6nXy9BVo9Z4cat13P1bNDeoLUSPzb6SQ5po7bHspPZVU?encodeFailures=1&width=440&height=432" alt="WebNova Logo" class="logo">
        </div>
        
    </header>
    <div id="side-menu" class="side-menu">
        <img src="https://bnz07pap001files.storage.live.com/y4m1vaGoNRW0hRJsLMmi9Fi_WPsZzHA6sNRVL57VMzqkk8e0WqkSFa9mV2yIXztfV2KnnJegrTrU-lTszQ-KbOjStypEck9mXNg2N3zLKhrDUdXGbVnlHbdn_QIi6S1-9zIFc1VGip3-5swmL_qOeaJ_rRXyPeygtSdUO75YVazJ7FQYx3bCcxskhA0zMM3unTKlAvFyDAhnh2r1uaVtUpqyZbbz4Hyt6CRnRgKJAQaawE?encodeFailures=1&width=476&height=375" alt="Close Menu" id="menu-close" class="menu-close">
        <div class="menu-item">
            <a href="./index.html">Inicio </a>
            <a id="see-plans">Planes <span class="arrow">&#9662;</span>
                <div class="submenu">
                    <a href="#">Estándar</a>
                    <a href="#">Prime Personalizado</a>
                    <a href="#">Renovación Web</a>
                </div>
            </a>
            <a id="servicios">Servicios <span class="arrow2">&#9662;</span>
                <div class="submenu2">
                    <a href="#">Mantenimiento Web</a>
                    <a href="#">Trabajo Personalizado</a>
                </div>
            </a>
            <a href="./portafolio.html">Portafolio</a>
            <a id="politicas">Políticas<span class="arrow3">&#9662;</span>                                                                                                                               
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

    
});


