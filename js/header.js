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
        <a href="#">Inicio</a>
        <a href="#">Planes</a>
        <a href="#">Servicios</a>
        <a href="#">Portafolio</a>
        <a href="#">Politicas</a>
        <a href="#">Contacto</a>

    </div>
    `;
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.add('menu-active');
        body.classList.add('no-scroll');
    });

    menuClose.addEventListener('click', function() {
        sideMenu.classList.remove('menu-active');
        body.classList.remove('no-scroll');
    });

    body.addEventListener('click', function(event) {
        // Verifica si el clic fue fuera del menú y si el menú está activo
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target) && sideMenu.classList.contains('menu-active')) {
            sideMenu.classList.remove('menu-active');
            body.classList.remove('no-scroll');
        }
    });
});

//comentario
