document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.createElement('div');
    inicioContainer.className = 'inicio-container';

    inicioContainer.innerHTML = `
        <div class="inicio-top"></div>
        <img src="https://bnz07pap001files.storage.live.com/y4mq247QQjgHG9WU2-FhKJkMEbRgQ_RgDVK3c8yLrYugSahiQ9jfy_hapGX7rZmHaOkK6t1IJAdZ5T18FKPpivB0081JMzTUV3pm48ElkC4B3wTyxG9PnpXwgXw-OBv6SjXJw5RgYkxC232n-b7BytXhbik51Rt26ABy2L1TE4mGqP4DBW9PzKu56TrtOzMQxhkG79DsPaJAjLDzBm60FCn61GjwIKXvbulz29pSNFi4mk?encodeFailures=1&width=619&height=485" class="imagen-central">
        <div class="inicio-bottom">
            <div class="text-container">
                <p class="line-text line1">─── Obten un 30% de ───</p>
                <div class="discount-line">
                    <p class="discount-text">DESCUENTO</p>
                    <div class="price-box">
                        <div class="price-info">
                            $999
                            <br>
                            <s>$1500</s>
                        </div>
                    </div>
                </div>
                <p class="line-text line3">en tu página web ahora</p>
            </div>
        </div>
    `;

    document.body.appendChild(inicioContainer);
    
});
//comentario MODIFICICACION

document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.querySelector('.inicio-container');

    const callToActionContainer = document.createElement('div');
    callToActionContainer.className = 'cta-container';

    callToActionContainer.innerHTML = `
        <div class="cta-text">TE AYUDAMOS A IMPULSAR TU EMPRESA</div>
        <button id="cta-button" class="cta-button">VER PLANES</button>
    `;

    inicioContainer.appendChild(callToActionContainer);

    document.getElementById('cta-button').addEventListener('click', function() { window.location.href = 'planes.html'; });
});


document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.querySelector('.inicio-container');

    for (let i = 1; i <= 4; i++) {
        const infoContainer = document.createElement('div');
        infoContainer.className = `contenedorInfo contenedorInfo${i}`;

        // Añadir contenido solo a los contenedores específicos
        switch(i) {
            case 1:
                infoContainer.innerHTML = `
                <h2 class="info-title">Convierte clics en clientes</h2>
                <button id="details-button" class="details-button">Obtener Detalles</button>
                <div class="more-info-container">
                    <h3>¿Por qué WebNova?</h3>
                    <p class="info-text">Maximiza tu presencia en línea y alcanza nuevos mercados con nuestras soluciones web personalizadas.</p>
                    
                    <button id="verPortafolio" class="see-plans">VER PORTAFOLIO</button>
                    <p class="small-text">Consulte nuestros planes para más detalles sobre precios y servicios.</p>
                </div>

                `;
                break;
            case 2:
                infoContainer.innerHTML = `
                <h2 class="info-title2">─── Obten desde ───</h2>
                <div class="price-highlight">$85/mes</div>
                <p class="maintenance-description">Mantenimiento eficiente y personalizado</p>
                <button id="details-button2"class="details-button2">Ver Planes</button>
                <div class="more-info-container">
                    <img src="https://bnz07pap001files.storage.live.com/y4mazaGEryfxc4EisricxUqVevd92hSquZNSiF2Lw6h4_GsNZYyPaT-fph7OucBDqDe1zSR3PFS_Q8QFfyIXiKW1ZFG3MvcMAiD2s1zlfbyDCOZCsNvSPoVp0zDc18Fp8q0UQVq_PT5qX7fhHWpk5Ev9o0hYGrUwuq9WHtvu_KRxzW0Np-UN0F0jm3qEkwO8LhyouP1FVT5lIhz4wfwYqcSTZDgwwJ_S_mn25LlnDrQQpY?encodeFailures=1&width=543&height=486" alt="Descripción de la imagen" class="maintenance-image">
                    <p class="info-text">Garantiza el rendimiento óptimo de tu sitio web con nuestros planes de mantenimiento personalizados.</p>
                    <p class="small-text2">Compra 4 meses y obten 2 meses GRATIS.</p>
                </div>
                `;
                break;
            case 3:
                infoContainer.classList.add('skills-container');  // Añade una clase específica
                infoContainer.innerHTML = `
                <h2 class="info-title3">Soluciones Web Que Dejan Huella</h2>
                <p class="skill-description">Desarrollamos soluciones que no solo cumplen con las expectativas, sino que las superan, asegurando resultados que realmente marcan la diferencia.</p>
                <div class="skills-grid">
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mFt0pGACUm4615Nth4cgI9djcZ4vipSkJe0eheIPIb1jqW3Z91thMF2i_B-6Jft1p31rRHzDxzMK7oQ6OzS7mc33GQfP1bp6qmtVCXUJlwuQ1FQEW-fMGKvc2bcGSflZNT3fpSwEN7ypbPcyh0ncteiDz30upIoCt_-X7qEu9JAgl3vYPHOboUl2ZhRONGPehnWiolTmOSUezBUQPQ6xhGjwue_940Z-9VjMUGjmBaXY?encodeFailures=1&width=575&height=397" alt="Skill 1">
                        <h3 class="titleSkills">Tu Proyecto, Nuestra Prioridad</h3>
                        <p class="pSkills">Soluciones web de alta calidad en tiempos récord, asegurando que tu negocio brille sin demoras.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mtA5zpVpIZt-NpcWjJzzJr1TmrMUlH-R7AUAuMaVVFannw7SFpw-skA_87NkE9naCWuggHZ2rOn7FkwYstzXUDNumaoXq7hobCO6YDPCySHAS_0lBpvmxksuQXtpT6dfGAYFDj2RncbuISzIu6qgCNucFWzIYI6LyFvRHl3Th8K4LSNRpdFeVuxz4zPottkh4dz_HiHFCa1ZnAGlzulpC6dj9oGYJcc8Saq0lYvS6M-E?encodeFailures=1&width=428&height=432" alt="Skill 2">
                        <h3 class="titleSkills">SEO y Marketing</h3>
                        <p class="pSkills">Optimizamos tu presencia online para maximizar tu alcance.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mdn5ioj77be15LTgoI1AZkGgo-_JM71YGz-QhNBXtMAzPsk-5uVhEGxT0FLTfwwvhxIyilzWaT7m7XXWgoIEG1De_LeTWcOQAI0Vn1Eno-rG36HhcPG2G0wz8es9LjhlWc8KumvCoxwkpSTDdymAtUNeiKbDuDwps8hD74VEx4HWNx1LZFyyzYJG9f1FbetA6Jw85PiXqtqwrG-pyGda90JeuN4n5oJuVQq8kyvOaPP8?encodeFailures=1&width=542&height=610" alt="Skill 3">
                        <h3 class="titleSkills">E-commerce</h3>
                        <p class="pSkills">Plataformas robustas para que vendas en línea sin complicaciones.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mk1MUEVyJReilNIiGtonH4QAe9NqOep_rEsYgwVtFpfH79RntTiUCqow1tju1_BYGJqklMRZIYatMYTnsj_7e6bqrl4vfyJ6yCXWwTtJtMXkrO-QzRL5_xSo2xsfc9kpoRYfzTbAOe7TQNWrUD0H_IkkgBYVy8DyZwm4Iff8J88KGZKTCvypUNcyVIz1YogTlPvWSFGTQF6L7yrBqcJcH7jk6Q4IVPm8UiBIAYvCB4Ao?encodeFailures=1&width=541&height=583" alt="Skill 4">
                        <h3 class="titleSkills">Soporte Técnico</h3>
                        <p class="pSkills">Mantenimiento y soporte técnico que mantiene tu sitio al 100%.</p>
                    </div>
                </div>
                `;
                break;
                case 4:
                    infoContainer.classList.add('skills-container');  // Añade una clase específica
                    infoContainer.innerHTML = `
                    <footer class="footer">
            <div class="footer-info">
                <p>© 2024 WebNova. Todos los derechos reservados.</p>
                <p>Correo: contacto@webnova.com</p>
                <p>Teléfono: +123 456 7890</p>
            </div>
            <div class="footer-links">
                <a href="#!">Política de Privacidad</a>
                <a href="#!">Términos de Servicio</a>
            </div>
            <div class="footer-social">
                <a href="#!" class="social-link">Facebook</a>
                <a href="#!" class="social-link">Twitter</a>
                <a href="#!" class="social-link">Instagram</a>
            </div>
        </footer>
                    `;
                    break;
        }
        
        inicioContainer.appendChild(infoContainer);
    }
    document.getElementById('verPortafolio').addEventListener('click', function() { window.location.href = 'portafolio.html'; });
    document.getElementById('details-button2').addEventListener('click', function() { window.location.href = 'mantenimiento.html'; });
    document.getElementById('see-plans').addEventListener('click', function() { window.location.href = 'planes.html'; });
    document.getElementById('servicios').addEventListener('click', function() { window.location.href = 'servicios.html'; });
    document.getElementById('politicas1').addEventListener('click', function() { window.location.href = 'politicas.html'; });
    document.getElementById('details-button').addEventListener('click', function() { window.location.href = 'planes.html'; });
});

