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

        if (i === 1) {
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
        } else {
            infoContainer.textContent = `Contenido del contenedorInfo${i}`;
        }
        
        inicioContainer.appendChild(infoContainer);
    }
});
