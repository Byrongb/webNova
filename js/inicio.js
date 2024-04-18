document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.createElement('div');
    inicioContainer.className = 'inicio-container';

    inicioContainer.innerHTML = `
        <div class="inicio-top"></div>
        <img src="https://bnz07pap001files.storage.live.com/y4m63-rR5ubxCDR9j68u1RGXjB1ycEXJCGhAE4GQeMK_vG5v1pkcnsmz6DvrTPkzN1ccmTLyWROS8yXfV7ifIfadd-fF_0SXvwGtL-Tqpkn0t-Gb2XlTHdOXngffREXFGO-1guaw_oFf9uFz1vZISLRxN8iGRgnK_T0zQXLypSsbbTMTEoEVU3mElYhmMI1LvkUbd5KZkcPKDWXJ_hxWz7cp6pRiz8GZn_IPhM2_mZUIUU?encodeFailures=1&width=549&height=455" class="imagen-central">
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
                <p class="line-text line3">en su página web ahora</p>
            </div>
        </div>
    `;

    document.body.appendChild(inicioContainer);
});
//comentario

document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.querySelector('.inicio-container');

    const callToActionContainer = document.createElement('div');
    callToActionContainer.className = 'cta-container';

    callToActionContainer.innerHTML = `
        <div class="cta-text">TE AYUDAMOS A IMPULSAR TU EMPRESA</div>
        <button class="cta-button">VER PLANES</button>
    `;

    inicioContainer.appendChild(callToActionContainer);
});


document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.querySelector('.inicio-container');

    for (let i = 1; i <= 3; i++) {
        const infoContainer = document.createElement('div');
        infoContainer.className = `contenedorInfo contenedorInfo${i}`;

        // Añadir contenido solo a los contenedores específicos
        switch(i) {
            case 1:
                infoContainer.innerHTML = `
                <h2 class="info-title">Convierte clics en clientes</h2>
                <button class="details-button">Obtener Detalles</button>
                <div class="more-info-container">
                    <h3>¿Por qué WebNova?</h3>
                    <p class="info-text">Maximiza tu presencia en línea y alcanza nuevos mercados con nuestras soluciones web personalizadas.</p>
                    
                    <button class="see-plans">VER PORTAFOLIO</button>
                    <p class="small-text">Consulte nuestros planes para más detalles sobre precios y servicios.</p>
                </div>

                `;
                break;
            case 2:
                infoContainer.innerHTML = `
                <h2 class="info-title2">--- Obten desde ---</h2>
                <div class="price-highlight">$85/mes</div>
                <p class="maintenance-description">Mantenimiento eficiente y personalizado</p>
                <button class="details-button2">Ver Planes</button>
                <div class="more-info-container">
                    <img src="https://bnz07pap001files.storage.live.com/y4mazaGEryfxc4EisricxUqVevd92hSquZNSiF2Lw6h4_GsNZYyPaT-fph7OucBDqDe1zSR3PFS_Q8QFfyIXiKW1ZFG3MvcMAiD2s1zlfbyDCOZCsNvSPoVp0zDc18Fp8q0UQVq_PT5qX7fhHWpk5Ev9o0hYGrUwuq9WHtvu_KRxzW0Np-UN0F0jm3qEkwO8LhyouP1FVT5lIhz4wfwYqcSTZDgwwJ_S_mn25LlnDrQQpY?encodeFailures=1&width=543&height=486" alt="Descripción de la imagen" class="maintenance-image">
                    <p class="info-text">Garantiza el rendimiento óptimo de tu sitio web con nuestros planes de mantenimiento personalizados.</p>
                </div>
                `;
                break;
            case 3:
                infoContainer.textContent = 'Aquí irán tus habilidades y tecnologías que dominas.';
                break;
        }
        
        inicioContainer.appendChild(infoContainer);
    }
});
