document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.createElement('div');
    inicioContainer.className = 'inicio-container';

    inicioContainer.innerHTML = `
        <div class="inicio-top"></div>
        <img src="https://bnz07pap001files.storage.live.com/y4mHJKSKLhEZLMmuU0ktuFO1-7p3IWT970e9YHSKjAYNwM4fORsn0QdXJ65eTz5fcqHJ7cUJ6dI69QlZx4vU9MAUR0J6xDGK8qifzh7Tzn6x57oJPQE75gdXiLU9wcIOtelVB7JOn8OAVLT6K6G1EU-J0CEemkMykZmEAUvvdnRjYIu8Mn19koMMvVI7aizxxkdQG5hpsMGVHAHlCdaWukbz1S2DL-6OkL1rOUpC6hcgKc?encodeFailures=1&width=619&height=485" class="imagen-central">
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
                    <img src="https://bnz07pap001files.storage.live.com/y4mAaSZQjfF3tlg9qDx_zYEdNC7NfCIfYrtsBO7xCF0LkvZ1fvWwRiwoXXdrjpifH-166G1LEVfebMtTgLgd9ADBm1W9IIDgzdAYpqrXZ3hANVp7vqWJdTHKT4ZhDADdHGg4k6PDR7hRMNZxjc85lEnwQnIL2JxFsGDa62AAp82OeUNLPxzpPDIpPMuxRn_ivk2LKIrR0cr-2pQIGoa1ROa5816nNZUJq-UuVrwoxfN-m0?encodeFailures=1&width=543&height=486" alt="Descripción de la imagen" class="maintenance-image">
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
                        <img src="https://bnz07pap001files.storage.live.com/y4m98Ib6uA16AVLcetJnZN7BhFxCwnE3v408ERmAWCC5fNYQtS4Co42Jm-lyyj-LpducP4xgq4jmdAAF8slBfr9SL_5XIRH9XgDihlfKmQ2jn-ZMmgHX4H1531jzhM5nIsx3EK31iae_HFBZSdTkeH8quIjCsgbBdfMAyxII-0VojL0KGeC1Ji5ytkUnt2s3ZGhagnqjm5Zz2jt979bBxuwOfC8cNilLaNRU7RC-ovmRKc?encodeFailures=1&width=575&height=397" alt="Skill 1">
                        <h3 class="titleSkills">Tu Proyecto, Nuestra Prioridad</h3>
                        <p class="pSkills">Soluciones web de alta calidad en tiempos récord, asegurando que tu negocio brille sin demoras.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mptM8W1bxI4v8y_sKSSYlfYV54p2xWkqxlDJg6MtfbImB-ALBGftavPdRQgm6upd71NeZvCWWnZpez9Z-sdfP3ijZr4IGw6zPQ8t_R7m7fwW1FINKYNt-YeVCe2QOhwEOR6-0ORRFet-oRkvDIHlBe72wbHsu6DK9mxNRtcypUZJ_j7QPNdLeVJosE0bxgKppl9lbRactBO0Iflntqc0HItjiI3F16AuaK6dirS2Bil0?encodeFailures=1&width=428&height=432" alt="Skill 2">
                        <h3 class="titleSkills">SEO y Marketing</h3>
                        <p class="pSkills">Optimizamos tu presencia online para maximizar tu alcance.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mMbP5CEkGqNLR8sNqOZ7hDAX2hCdRPy75qkfo66Sp-1A5I6EseccosnNpLf6FB_9Z7mIrCoSFm33lYYZxWQ9CGwGaWBIxObxuZB862IHkRVXQcn4DzM7d2Oc8lSiJpp9-uHlAEibqQ2ASnazANQvs6eTsV9DM5ySQPF8ea-7aHmO9CGAkUwVMqlOcQTE19M5fIq6z9VHUDJ7JjzUyPCArVSAhEIB5c-NuhPh55vwttLc?encodeFailures=1&width=542&height=610" alt="Skill 3">
                        <h3 class="titleSkills">E-commerce</h3>
                        <p class="pSkills">Plataformas robustas para que vendas en línea sin complicaciones.</p>
                    </div>
                    <div class="skill-item">
                        <img src="https://bnz07pap001files.storage.live.com/y4mpcGnTfHb6bkNoHMbBis2suMu14bf3v_1F3V_tpntrtk8SnwA3oI7LEksAaFGcEZ23A45d-5E9WdLb2J2o1rAdFcLNrOp0XImgXFdnRO5CcTtd8AnwyGlGiI3VK3G00i1MiSeznNRBuCOgt6mm0EjG18R9i3Bw3APQZfac9-6ckUelOdWq0B2jT94BkKOEjJsuj7gQK2NxZo1VMRvGRdA_7Vr-BIFRWx3mjzTGJcafSI?encodeFailures=1&width=541&height=583" alt="Skill 4">
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

