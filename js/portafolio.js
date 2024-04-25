document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');

    container.innerHTML = `
        <div class="portada">
            <img src="img/Captura de pantalla 2024-04-25 163325.png" alt="Descripción de la imagen"  class="img-portada">
        </div>
        
        <div class="portfolio-intro">
            <h1 class="title">Explora Nuestro Portafolio</h1>
            <p class="description">Descubre cómo combinamos HTML, CSS, JavaScript, e inteligencia artificial para crear experiencias web únicas.</p>
        </div>
        <div class="plans-overview">
            <div class="plan-detail">
                <h2 class="title2">Estándar Básico</h2>
                ${createPortfolioItem('Restaurant, Bar, Cafetería, etc.', 'img/Captura de pantalla 2024-04-25 151807.png', 'Descubre cómo nuestra página web diseñada para restaurantes puede transformar tu negocio gastronómico.', 'https://byrongb.github.io/Chap-nRain/')}
                ${createPortfolioItem('Blog personal, Noticias, etc.', 'img/cafeteria.jpg', 'Una página perfecta para cafeterías que quieren mostrar su menú y ambiente único.', 'https://example.com/cafeteria')}
                ${createPortfolioItem('Salon, Peluqueria, Tatuajes, etc.', 'img/bistro.jpg', 'Ideal para bistros buscando una presencia elegante en la web.', 'https://byrongb.github.io/Chap-nRain/')}
            </div>
            <div class="plan-detail">
                <h2 class="title2">Estándar Plus</h2>
                ${createPortfolioItem('Compañía de Pintura', 'img/paint.jpg', 'Eleva la presencia de tu compañía de pintura en línea con una página web que refleje la calidad y el detalle de tu trabajo.', 'https://example.com/paint')}
                ${createPortfolioItem('Servicios de Limpieza', 'img/cleaning.jpg', 'Una solución web para empresas de limpieza que desean expandir su clientela.', 'https://example.com/cleaning')}
                ${createPortfolioItem('Renovaciones', 'img/renovation.jpg', 'Destaca tus servicios de renovación con un diseño web que muestra tus proyectos anteriores.', 'https://example.com/renovation')}
            </div>
            <div class="plan-detail">
                <h2 class="title2">Estándar Élite</h2>
                ${createPortfolioItem('E-commerce', 'img/ecommerce.jpg', 'Impulsa tus ventas en línea con nuestra robusta solución de e-commerce.', 'https://example.com/ecommerce')}
                ${createPortfolioItem('Tecnología', 'img/tech.jpg', 'Perfecto para empresas de tecnología que buscan una imagen moderna y funcional.', 'https://example.com/tech')}
                ${createPortfolioItem('Corporativo', 'img/corporate.jpg', 'Una página web corporativa diseñada para reflejar la seriedad y profesionalismo de tu empresa.', 'https://example.com/corporate')}
            </div>
        </div>
    `;

    function createPortfolioItem(name, imageUrl, description, projectUrl) {
        return `
            <div class="portfolio-item">
                <img src="${imageUrl}" alt="${name}" class="portfolio-image">
                <h3>${name}</h3>
                <p>${description}</p>
                <button onclick="window.location.href='${projectUrl}'" class="view-page-button">Ver Página</button>
            </div>
        `;
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