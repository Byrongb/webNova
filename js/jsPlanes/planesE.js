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