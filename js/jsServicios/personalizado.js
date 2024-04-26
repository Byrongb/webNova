document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content');

    container.innerHTML = `
        <div class="personal-intro">
            <img src="path_to_your_profile_image.jpg" alt="Foto" class="profile-image">
            <h1>Byron G Guerra Hernandez<h1>
            <h3>Desarrollador Web y Solucionador de Problemas Informáticos</h3>
            <a href="path_to_your_highschool_certificate.jpg" target="_blank" class="certificate-link">Ver Certificado de High School en Computación</a>
            <p>Aquí encontrarás soluciones rápidas y eficientes para tus necesidades informáticas diarias. Te ofrezco una amplia gama de servicios adaptados a facilitar tu vida digital.</p>
        </div>
        <div class="service-container">
            <!-- Aquí se insertan los divs de servicios -->
            ${createServiceDiv('Typear Documentos', 'Ideal para profesionales ocupados o estudiantes que necesitan ayuda con la digitación de sus trabajos.')}
            ${createServiceDiv('Recuperar Cuentas', 'Asistencia rápida y segura para recuperar acceso a tus cuentas online importantes.')}
            ${createServiceDiv('Digitalización de Documentos:', 'Soporte para problemas informáticos menores, optimización de sistemas y más.')}
            ${createServiceDiv('Configuración de Email', 'Ayuda con la configuración de cuentas de correo electrónico.')}
            ${createServiceDiv('Gestión de Redes Sociales', 'Asistencia en la configuración y manejo de perfiles sociales.')}
            ${createServiceDiv('Transcripción de Audio a Texto', 'Conversión de grabaciones de audio en documentos escritos.')}
            ${createServiceDiv('Soporte Remoto', 'Soluciones a problemas informáticos a distancia.')}
            ${createServiceDiv('Creación de Presentaciones', 'Diseño de presentaciones para eventos o negocios.')}
            ${createServiceDiv('Soporte para Aplicaciones de Oficina', 'Ayuda con Word, Excel, PowerPoint, etc.')}
            ${createServiceDiv('Servicios de Subtitulado', 'Creación de subtítulos para videos.')}
        </div>
    `;

    function createServiceDiv(title, description) {
        return `
            <div class="service-div">
                <h3>${title}</h3>
                <p>${description}</p>
                <button onclick="window.location.href='contacto.html'">Contactar</button>
            </div>
        `;
    }
});