document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.createElement('div');
    inicioContainer.className = 'inicio-container';

    inicioContainer.innerHTML = `
        <div class="container-inicio">
            <div class="contact-info">
                <p class="contact-text lineA1">Agentes listos al</p>
                <p class="contact-number lineA2">(206) 556 0771</p>
                <p class="contact-action lineA3">Contáctanos!</p>
            </div>  
            <img src="img/image-removebg-preview (7).png" alt="menu icon"  class="imagen-central">
        </div> 

        <div class="inicio-bottom">
            <div class="text-container">
                <p class="line-text lineB1">─── Obten un 30% de ───</p>
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
                <h2 class="info-title2">─ Obten desde ─</h2>
                <div class="price-highlight">$85/mes</div>
                <p class="maintenance-description">Mantenimiento eficiente y personalizado</p>
                <button id="details-button2"class="details-button2">Ver Planes</button>
                <div class="more-info-container">
                    
                    <img src="img/descarga (5).png" alt="Descripción de la imagen" class="maintenance-image">
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
                        <img src="img/Captura de pantalla 2024-04-25 145850.png" alt="Skill 1">
                        <h3 class="titleSkills">Tu Proyecto, Nuestra Prioridad</h3>
                        <p class="pSkills">Soluciones web de alta calidad en tiempos récord, asegurando que tu negocio brille sin demoras.</p>
                    </div>
                    <div class="skill-item">
                        <img src="img/Captura de pantalla 2024-04-18 201209.png" alt="Skill 2">
                        <h3 class="titleSkills">SEO y Marketing</h3>
                        <p class="pSkills">Optimizamos tu presencia online para maximizar tu alcance.</p>
                    </div>
                    <div class="skill-item">
                        <img src="img/Captura de pantalla 2024-04-18 201355.png" alt="Skill 3">
                        <h3 class="titleSkills">E-commerce</h3>
                        <p class="pSkills">Plataformas robustas para que vendas en línea sin complicaciones.</p>
                    </div>
                    <div class="skill-item">
                        <img src="img/Captura de pantalla 2024-04-18 201545.png" alt="Skill 4">
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
        document.addEventListener('DOMContentLoaded', function() {
            var elementos = document.querySelectorAll('.wg-default .wg-drop.country-selector a');
            elementos.forEach(function(el) {
                el.style.fontSize = '26px';
            });
        });
        inicioContainer.appendChild(infoContainer);
    }
    document.getElementById('verPortafolio').addEventListener('click', function() { window.location.href = 'portafolio.html'; });
    document.getElementById('details-button2').addEventListener('click', function() { window.location.href = 'mantenimiento.html'; });
    document.getElementById('see-plans').addEventListener('click', function() { window.location.href = 'planes.html'; });
    document.getElementById('servicios').addEventListener('click', function() { window.location.href = 'servicios.html'; });
    document.getElementById('politicas1').addEventListener('click', function() { window.location.href = 'politicas.html'; });
    document.getElementById('details-button').addEventListener('click', function() { window.location.href = 'planes.html'; });
});

