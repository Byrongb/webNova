document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content'); // Asegúrate de que este ID exista en tu HTML

    container.innerHTML = `
        <div class="portfolio-intro">
            <h1 class="title">Explora Nuestro Portafolio</h1>
            <p class="description">Descubre cómo combinamos HTML, CSS, JavaScript, e inteligencia artificial para crear experiencias web únicas.</p>
        </div>
        <div class="portfolio-container">
            ${createPortfolioItem('Restaurant', 'img/Captura de pantalla 2024-04-25 151807.png', 'Descubre cómo nuestra página web diseñada para restaurantes puede transformar tu negocio gastronómico. Ofreciendo menús interactivos, reservaciones en línea, y una galería visualmente atractiva de tus platillos, esta página no solo captura la esencia de tu cocina, sino que también invita a más clientes a experimentar la excelencia culinaria que ofreces.', 'https://byrongb.github.io/Chap-nRain/')}
            ${createPortfolioItem('Servicios', 'Eleva la presencia de tu compañía de trabajo en línea con una página web que refleje la calidad y el detalle de tu trabajo. Ideal para compañías de PINTURA, ROOFING, LIMPIEZA Facilita a tus clientes la solicitud de presupuestos, muestra galerías de proyectos anteriores y proporciona testimonios de clientes satisfechos para aumentar tu credibilidad y atraer más proyectos.', 'path_to_image_2.jpg', 'path_to_project_2.html')}
            ${createPortfolioItem('Nombre del Proyecto 3', 'path_to_image_3.jpg', 'path_to_project_3.html')}
            <!-- Más items según necesario -->
        </div>
    `;

    function createPortfolioItem(name, imageUrl, smallText, projectUrl) {
        return `
            <div class="portfolio-item">
                <img src="${imageUrl}" alt="${name}" class="portfolio-image">
                <h2>${name}</h2>
                <p class="small-text">${smallText}</p>
                <button onclick="window.location.href='${projectUrl}'" class="view-page-button">Ver Página</button>
            </div>
        `;
    }
});

