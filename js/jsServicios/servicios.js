document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');
    let currentSlide = 0;

    container.innerHTML = `
    <div class="titles">
    <div class="title-container">
        <h3 class="title1">Mantenimiento</h3>
        <div class="progress-bar"></div>
    </div>
    <div class="title-container">
        <h3 class="title2">Trabajo Personalizado</h3>
        <div class="progress-bar2"></div>
    </div>
    </div>
        <div class="carousel">
            <div class="slide-maintenance">
                <div class="maintenance-intro">
                    <img src="path_to_your_maintenance_image.jpg" alt="Mantenimiento Web" class="maintenance-image">
                    <h1 class="title">Planes de Mantenimiento</h1>
                    <p class="description">Ofrecemos planes de mantenimiento diseñados para mantener tu sitio web actualizado, seguro y funcionando sin problemas. Escoge el que mejor se adapte a tus necesidades.</p>
                    <button onclick="window.location.href='contacto.html'" class="contact-button">Obtener</button>
                </div>
            </div>
            <div class="slide-custom" style="display: none;">Hola Trabajo Personalizado</div>
        </div>
    `;


    const progressBar = document.querySelector('.progress-bar');
    const progressBar2 = document.querySelector('.progress-bar2');
    const slides = document.querySelectorAll('.slide-maintenance, .slide-custom');

    function switchSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    function animateProgressBar() {
        progressBar.style.display = 'block'; // Mostrar la primera barra
        progressBar2.style.display = 'none';  // Asegurarse de que la segunda barra esté oculta
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.transition = 'width 5s linear';
            progressBar.style.width = '100%';  // Ajuste para que solo llegue al 50%
            setTimeout(() => {
                switchSlide();
                animateProgressBar2();  // Inicia la animación de la segunda barra
            }, 5000);
        }, 10);
    }

    function animateProgressBar2() {
        progressBar2.style.display = 'block'; // Mostrar la segunda barra
        progressBar.style.display = 'none';  // Ocultar la primera barra
        progressBar2.style.transition = 'none';
        progressBar2.style.width = '0%';
        setTimeout(() => {
            progressBar2.style.transition = 'width 5s linear';
            progressBar2.style.width = '100%';  // La segunda barra avanza hasta el 100%
            setTimeout(() => {
                switchSlide();
                animateProgressBar();  // Vuelve a la primera barra después de que la segunda termine
            }, 5000);
        }, 10);
    }

    animateProgressBar();  // Inicia la animación con la primera barra
});



