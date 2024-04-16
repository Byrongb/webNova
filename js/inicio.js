document.addEventListener('DOMContentLoaded', function() {
    const inicioContainer = document.createElement('div');
    inicioContainer.className = 'inicio-container';

    inicioContainer.innerHTML = `
        <div class="inicio-top"></div>
        <img src="https://bnz07pap001files.storage.live.com/y4mxHqpD0jDSF8wBuhl8tHRxtgEq2euyAyPqXQFAu36H2TLmPQ4fYPUPDCptu3TkJRDDwnpJfsMy3MCShy4WV3QqVjGanGjGixsc3xDJm_aHgpRhIMHVJsXh7QiNWJFqDcxtg4SMwyNYFyDnf6Riw-yIA8r8TZK64eOWpZB86PCbBKEiXASi3fbkLaIFrKPO4z6rkKcdEZkOD2HFupu49kcWy13dy3k3HjYxYttTzKpmII?encodeFailures=1&width=549&height=455" alt="Imagen Descriptiva" class="imagen-central">
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
        infoContainer.textContent = `Contenido del contenedorInfo${i}`; // Texto de ejemplo
        inicioContainer.appendChild(infoContainer);
    }
});
