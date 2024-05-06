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
                <img src="img/Captura de pantalla 2024-05-01 190659.png" class="background-image">
                    <button onclick="window.location.href='mantenimiento.html'" class="contact-button">Obtener</button>
                </div>
            </div>
        </div>
            <div class="slide-custom" style="display: none;">
                <div class="maintenance-intro2">
                <img src="img/Captura de pantalla 2024-05-01 205522.png" class="background-image">
                    <button onclick="window.location.href='trabajoPersonalizado.html'" class="contact-button2">Obtener</button>
                </div>
            </div>
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



    document.addEventListener('DOMContentLoaded', function() {
    const ContainerEnvudo = document.getElementById('content2'); // Asegúrate de tener este contenedor en tu HTML

    ContainerEnvudo.innerHTML = `
    <h2 class="info-titleS">Obten una página web y mantenimiento de ella, así de fácil</h2>
    <div class="skills-grid">
        <div class="skill-item">
            <img src="img/Captura de pantalla 2024-04-25 145850.png" alt="Skill 1">
            <h3 class="titleSkills">1. Contáctanos</h3>
            <p class="pSkills">Inicia tu proyecto con solo hacernos una llamada o enviándonos un correo. Estamos listos para atenderte y discutir tus necesidades.</p>
        </div>
        <div class="skill-item">
            <img src="img/Captura de pantalla 2024-04-18 201209.png" alt="Skill 2">
            <h3 class="titleSkills">2. Muestra tu diseño o elige una plantilla</h3>
            <p class="pSkills">¿Tienes una visión específica? Muéstranos tu diseño o selecciona una de nuestras plantillas personalizables. Nuestro portafolio está diseñado para ofrecerte variedad y flexibilidad.</p>
        </div>
        <div class="skill-item">
            <img src="img/Captura de pantalla 2024-04-18 201355.png" alt="Skill 3">
            <h3 class="titleSkills">3. Tiempo de Desarrollo</h3>
            <p class="pSkills">Relájate mientras nosotros hacemos la magia. El proceso de creación puede tomar de 1 a 3 semanas, dependiendo de la complejidad del proyecto. Te mantendremos informado en cada paso.</p>
        </div>
        <div class="skill-item">
            <img src="img/Captura de pantalla 2024-04-18 201545.png" alt="Skill 4">
            <h3 class="titleSkills">4. Aprobación del Cliente</h3>
            <p class="pSkills">Antes de finalizar, tu opinión es crucial. Revisaremos juntos el proyecto final para asegurarnos de que todo está perfecto según tus expectativas.</p>
        </div>
        <div class="skill-item">
            <img src="img/Captura de pantalla 2024-04-18 201545.png" alt="Skill 4">
            <h3 class="titleSkills">5. ¡Disfruta tu nuevo sitio web!</h3>
            <p class="pSkills">Una vez aprobado, tu nuevo sitio estará listo para brillar en la web. ¡Disfruta de los beneficios de tener una presencia digital más fuerte y más atractiva!</p>
        </div>
        </div>
    </div>
`;
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselOpiniones = document.getElementById('content3'); // Asegúrate de tener este contenedor en tu HTML

    carouselOpiniones.innerHTML = `
    <h2 class="info-titleC">Conoce la opinión de nuestros clientes</h2>
     <div class="container-carousel">
        <div class="carruseles" id="slider">
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
            <section class="slider-section">
                <div class="contentCarousel">
                    <div class="name">John <br> Morgan</div>
                    <div class="rating">★★★★★</div>
                    <div class="des">"This is an incredible testimony that speaks about the quality and professionalism of the service received. The attention to detail and efficiency of the team was exceptional."</div>
                    <button onclick="window.location.href='estimate.html'">GET ESTIMATE</button>
                </div>
            </section>
        </div>
        <div class="btn-left"><i class='bx bx-chevron-left'></i></div>
        <div class="btn-right"><i class='bx bx-chevron-right'></i></div>
    </div>
`;

const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");
    let currentIndex = 0;

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
    currentIndex = (currentIndex + 1) % sliderSections.length; // Incrementa el índice, vuelve a 0 al final
    slider.style.transform = `translateX(-${currentIndex * widthPercent}%)`; // Mueve el carrusel
    slider.style.transition = "transform 0.6s ease-out"; // Suaviza la transición
}, 3000); // Cambia cada 3 segundos

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

    function moveToRight() {
        if (counter >= sliderSection.length - 1) {
            counter = 0;
            operacion = 0;
        } else {
            counter++;
            operacion += widthImg;
        }
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "transform 0.8s ease";
    }
    
    function moveToLeft() {
        if (counter <= 0) {
            counter = sliderSection.length - 1;
            operacion = widthImg * (sliderSection.length - 1);
        } else {
            counter--;
            operacion -= widthImg;
        }
        slider.style.transform = `translateX(-${operacion}%)`;
        slider.style.transition = "transform 0.8s ease";
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



